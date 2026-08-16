#!/usr/bin/env bash
set -euo pipefail

# Samarth Portfolio - one-click GitHub deploy
# Put this file in the ROOT of the portfolio repository.
# Double-click it (or run: ./DEPLOY_PORTFOLIO.sh).

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

if [[ ! -d ".git" ]]; then
  echo
  echo "ERROR: This file must be inside the GitHub portfolio repository."
  echo "Current directory: $ROOT"
  echo
  read -r -p "Press Enter to close..."
  exit 1
fi

echo "=============================================="
echo "        SAMARTH PORTFOLIO DEPLOY"
echo "=============================================="
echo

REMOTE="$(git remote get-url origin 2>/dev/null || true)"
if [[ -z "$REMOTE" ]]; then
  echo "ERROR: No 'origin' Git remote is configured."
  read -r -p "Press Enter to close..."
  exit 1
fi

echo "Repository: $REMOTE"
echo

read -r -p "GitHub username: " GH_USER
read -r -s -p "GitHub Personal Access Token: " GH_TOKEN
echo
echo

if [[ -z "$GH_USER" || -z "$GH_TOKEN" ]]; then
  echo "ERROR: Username and token are required."
  read -r -p "Press Enter to close..."
  exit 1
fi

# Keep the real origin URL unchanged. Git receives credentials only through
# this short-lived askpass helper, so the token is not written into .git/config.
ASKPASS="$(mktemp)"
cleanup() {
  rm -f "$ASKPASS"
  unset GIT_ASKPASS GIT_TERMINAL_PROMPT PORTFOLIO_GH_USER PORTFOLIO_GH_TOKEN
}
trap cleanup EXIT

cat > "$ASKPASS" <<'EOF'
#!/usr/bin/env bash
case "$1" in
  *Username*) printf '%s\n' "$PORTFOLIO_GH_USER" ;;
  *Password*) printf '%s\n' "$PORTFOLIO_GH_TOKEN" ;;
  *) printf '\n' ;;
esac
EOF
chmod 700 "$ASKPASS"

export GIT_ASKPASS="$ASKPASS"
export GIT_TERMINAL_PROMPT=0
export PORTFOLIO_GH_USER="$GH_USER"
export PORTFOLIO_GH_TOKEN="$GH_TOKEN"

echo "[1/4] Building portfolio..."
if ! npm run build; then
  echo
  echo "BUILD FAILED. Nothing was pushed."
  read -r -p "Press Enter to close..."
  exit 1
fi

echo
echo "[2/4] Checking Git status..."
git status --short
echo

if git diff --quiet && git diff --cached --quiet && [[ -z "$(git status --porcelain --untracked-files=all)" ]]; then
  echo "No changes to commit."
  echo
  echo "[3/4] Checking remote..."
  git fetch origin main --quiet
  git status -sb
  echo
  echo "Nothing to push."
  read -r -p "Press Enter to close..."
  exit 0
fi

echo "[3/4] Committing changes..."
git add -A

COMMIT_MSG="Update portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo
echo "[4/4] Pushing to GitHub..."
git push origin main

echo
echo "=============================================="
echo " DEPLOYMENT PUSHED SUCCESSFULLY"
echo "=============================================="
echo
echo "GitHub Actions will now build and deploy the site."
echo "Website: https://samarthkolge.dev/"
echo
read -r -p "Press Enter to close..."
