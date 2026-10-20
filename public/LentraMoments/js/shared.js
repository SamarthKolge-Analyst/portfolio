/* Shared behavior for both static HTML pages. Works when opened directly via file://. */
(function () {
  "use strict";
  var root = document.documentElement;
  var config = window.MOMENTS_CONFIG || {};
  var storedTheme = null;
  try { storedTheme = localStorage.getItem("lentra-moments-theme"); } catch (error) { /* local file storage can be restricted; fall back to OS preference */ }
  var preferred = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  var defaultTheme = config.defaultTheme === "dark" || config.defaultTheme === "light" ? config.defaultTheme : preferred;
  root.setAttribute("data-theme", storedTheme === "dark" || storedTheme === "light" ? storedTheme : defaultTheme);

  function updateThemeButtons() {
    var theme = root.getAttribute("data-theme") || "light";
    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      button.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    });
    var themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#091321" : "#f4f6fa");
  }

  document.querySelectorAll(".theme-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("lentra-moments-theme", next); } catch (error) { /* preference lasts for this page view */ }
      updateThemeButtons();
    });
  });
  updateThemeButtons();

  /* If HR supplies an approved local wordmark path, the placeholder can be replaced here. */
  if (typeof config.logoPath === "string" && config.logoPath.trim()) {
    document.querySelectorAll(".brand").forEach(function (brand) {
      var word = brand.querySelector(".brand-word");
      if (!word) return;
      var image = document.createElement("img");
      image.className = "brand-logo-image";
      image.src = config.logoPath;
      image.alt = "Lentra";
      image.addEventListener("error", function () {
        image.remove();
        word.hidden = false;
      });
      word.hidden = true;
      brand.insertBefore(image, word);
    });
  }

  var mobileToggle = document.querySelector(".mobile-nav-toggle");
  var nav = document.getElementById("primary-navigation");
  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.setAttribute("aria-label", "Open navigation");
      });
    });
    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !mobileToggle.contains(event.target)) {
        nav.classList.remove("is-open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if ("IntersectionObserver" in window) {
      document.documentElement.classList.add("js-motion");
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
      document.querySelectorAll(".reveal").forEach(function (item) { revealObserver.observe(item); });
    }
  }

  window.MomentsUI = {
    toast: function (message) {
      var region = document.getElementById("toast-region");
      if (!region) return;
      var toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      region.appendChild(toast);
      window.setTimeout(function () {
        toast.classList.add("fade-out");
        window.setTimeout(function () { toast.remove(); }, 240);
      }, 3300);
    },
    dialogNotice: function (dialogId) {
      var dialog = document.getElementById(dialogId || "notice-dialog");
      if (!dialog) return false;
      if (typeof dialog.showModal === "function") {
        if (!dialog.open) dialog.showModal();
        document.body.classList.add("dialog-open");
        return true;
      }
      window.alert("This is a concept prototype. The interaction will be configured with HR before launch.");
      return false;
    }
  };

  document.querySelectorAll("dialog").forEach(function (dialog) {
    dialog.addEventListener("close", function () { document.body.classList.remove("dialog-open"); });
    dialog.addEventListener("cancel", function () { document.body.classList.remove("dialog-open"); });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.querySelectorAll(".dialog-close, .dialog-close-secondary, .notice-close").forEach(function (button) {
      button.addEventListener("click", function () { dialog.close(); });
    });
  });

  /* Close buttons for dialog keyboard support are native; this is an extra fail-safe. */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") document.body.classList.remove("dialog-open");
  });
})();




/* Footer logo — one smooth rotation per footer entry */
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".site-footer");
    const logo = document.querySelector(".footer-brand-icon");

    if (!footer || !logo) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    let footerVisible = false;
    let animation = null;

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            // Do nothing if the footer is already visible.
            if (footerVisible) return;

            footerVisible = true;

            // Cancel any unfinished animation before starting a new visit.
            if (animation) animation.cancel();

          animation = logo.animate(
              [
                  { transform: "rotate(-18deg)", offset: 0 },
                  { transform: "rotate(350deg)", offset: 0.65 },
                  { transform: "rotate(365deg)", offset: 0.85 },
                  { transform: "rotate(360deg)", offset: 1 }
              ],
              {
                  duration: 8000,
                  easing: "cubic-bezier(0.22, 0.68, 0.25, 1)",
                  fill: "forwards"
              }
          );
        } else {
            // Re-arm only after leaving the footer.
            footerVisible = false;
        }
    }, {
        threshold: 0.1
    });

    observer.observe(footer);
});



/* =========================================
   ACTIVE NAVIGATION — CLICK + SCROLL
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("primary-navigation");

    if (!nav) return;

    const links = Array.from(
        nav.querySelectorAll('.nav-link[href^="#"]')
    );

    const sections = links
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (!links.length || !sections.length) return;

    let ticking = false;
    let programmaticScroll = false;
    let scrollEndTimer = null;

    function setActiveLink(id) {
        links.forEach(link => {
            const isActive = link.getAttribute("href") === `#${id}`;

            link.classList.toggle("is-active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    function getHeaderOffset() {
        const header = document.querySelector(".site-header");

        return header ? header.getBoundingClientRect().height : 0;
    }

    function updateActiveOnScroll() {
        ticking = false;

        // Keep the selected tab while navigating to its destination.
        if (programmaticScroll) return;

        const scrollPosition = window.scrollY;

        const pageBottom =
            window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 5;

        // At the bottom, activate the final navigation section.
        if (pageBottom) {
            setActiveLink(sections[sections.length - 1].id);
            return;
        }

        // Determine which section has reached the header's lower edge.
        const activationLine = getHeaderOffset() + 20;
        let activeSection = sections[0];

        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= activationLine) {
                activeSection = section;
            }
        });

        // At the top of the page, activate Home.
        if (scrollPosition <= 10) {
            activeSection = sections[0];
        }

        setActiveLink(activeSection.id);
    }

    function requestScrollUpdate() {
        if (ticking) return;

        ticking = true;

        window.requestAnimationFrame(updateActiveOnScroll);
    }

    function finishProgrammaticScroll(targetId) {
        clearTimeout(scrollEndTimer);

        programmaticScroll = false;

        // Ensure the intended tab remains active after scrolling.
        setActiveLink(targetId);

        requestScrollUpdate();
    }

    // Navigate precisely to the beginning of each section.
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (!targetSection) return;

            event.preventDefault();

            clearTimeout(scrollEndTimer);

            programmaticScroll = true;

            // Activate the clicked tab immediately.
            setActiveLink(targetId);

            // Calculate the section's exact position below the header.
            const targetPosition =
                targetSection.getBoundingClientRect().top +
                window.scrollY -
                getHeaderOffset();

            // Update the URL without triggering a second anchor scroll.
            if (window.location.hash !== `#${targetId}`) {
                window.history.pushState(null, "", `#${targetId}`);
            }

            window.scrollTo({
                top: Math.max(
                    0,
                    Math.min(
                        targetPosition,
                        document.documentElement.scrollHeight -
                            window.innerHeight
                    )
                ),
                behavior: "smooth"
            });

            // Wait for smooth scrolling to reach the destination.
            const checkScrollPosition = () => {
                if (!programmaticScroll) return;

                const currentTop =
                    targetSection.getBoundingClientRect().top;

                if (Math.abs(currentTop - getHeaderOffset()) <= 2) {
                    finishProgrammaticScroll(targetId);
                    return;
                }

                scrollEndTimer = setTimeout(
                    checkScrollPosition,
                    100
                );
            };

            scrollEndTimer = setTimeout(checkScrollPosition, 100);

            // Safety fallback if the destination cannot be reached exactly.
            setTimeout(() => {
                if (programmaticScroll) {
                    finishProgrammaticScroll(targetId);
                }
            }, 3000);
        });
    });

    // Update the active tab during manual scrolling.
    window.addEventListener("scroll", requestScrollUpdate, {
        passive: true
    });

    // Handle browser back/forward navigation.
    window.addEventListener("popstate", function () {
        const targetId = window.location.hash.slice(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) {
            requestScrollUpdate();
            return;
        }

        programmaticScroll = true;
        setActiveLink(targetId);

        const targetPosition =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            getHeaderOffset();

        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: "smooth"
        });

        setTimeout(() => {
            finishProgrammaticScroll(targetId);
        }, 800);
    });

    window.addEventListener("load", requestScrollUpdate);

    // Correct the active tab on initial page load.
    const initialId = window.location.hash.slice(1);

    if (sections.some(section => section.id === initialId)) {
        setActiveLink(initialId);
    } else {
        requestScrollUpdate();
    }
});