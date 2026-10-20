/* Homepage behavior: real search/filtering, top-eight cap, preview dialog and concept interactions. */
(function () {
  "use strict";
  var records = Array.isArray(window.MOMENTS_DATA) ? window.MOMENTS_DATA : [];
  var config = window.MOMENTS_CONFIG || { homepageLimit: 8, archiveUrl: "memories.html" };
  var grid = document.getElementById("memory-grid");
  var searchInput = document.getElementById("memory-search");
  var categorySelect = document.getElementById("category-filter");
  var yearSelect = document.getElementById("year-filter");
  var clearButton = document.getElementById("clear-filters");
  var emptyClearButton = document.getElementById("empty-clear");
  var countText = document.getElementById("memory-result-count");
  var emptyState = document.getElementById("memory-empty");
  var allMemoriesLink = document.getElementById("view-all-memories");
  var memoryDialog = document.getElementById("memory-dialog");
  var dialogArt = document.getElementById("dialog-art");
  var dialogCategory = document.getElementById("dialog-category");
  var dialogTitle = document.getElementById("dialog-title");
  var dialogDescription = document.getElementById("dialog-description");
  var dialogArchiveLink = document.getElementById("dialog-archive-link");
  var lastFocusedElement = null;
  var currentQuote = 0;
  var quoteIndex = document.getElementById("quote-count");
  var quoteText = document.getElementById("quote-text");

  if (!grid || !searchInput || !categorySelect || !yearSelect) return;

  function paramsFromControls() {
    var params = new URLSearchParams();
    if (searchInput.value.trim()) params.set("q", searchInput.value.trim());
    if (categorySelect.value !== "all") params.set("category", categorySelect.value);
    if (yearSelect.value !== "all") params.set("year", yearSelect.value);
    return params;
  }

  function updateArchiveLinks() {
    var query = paramsFromControls().toString();
    var url = config.archiveUrl || "memories.html";
    allMemoriesLink.href = query ? url + "?" + query : url;
    if (dialogArchiveLink) dialogArchiveLink.href = allMemoriesLink.href;
  }


  function buildArt(record) {
    var art = document.createElement("div");
    art.className = "memory-art visual-" + record.visual;
    art.setAttribute("role", "img");
    art.setAttribute("aria-label", record.alt || (record.title + ". Approved photo placeholder."));

    function addPlaceholderArtwork() {
      art.classList.remove("memory-photo");
      if (art.querySelector(".memory-art-shape")) return;
      ["art-sphere", "art-ribbon", "art-ribbon-two"].forEach(function (className) {
        var shape = document.createElement("span");
        shape.className = "memory-art-shape " + className;
        shape.setAttribute("aria-hidden", "true");
        art.appendChild(shape);
      });
      var star = document.createElement("span");
      star.className = "art-star";
      star.textContent = "✳";
      star.setAttribute("aria-hidden", "true");
      art.appendChild(star);
      var label = document.createElement("span");
      label.className = "art-label";
      label.textContent = "APPROVED PHOTO TO BE ADDED";
      art.appendChild(label);
    }

    if (typeof record.image === "string" && record.image.trim()) {
      art.classList.add("memory-photo");
      var image = document.createElement("img");
      image.src = record.image;
      image.alt = record.alt || record.title;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", function () {
        image.remove();
        addPlaceholderArtwork();
      }, { once: true });
      art.appendChild(image);
    } else {
      addPlaceholderArtwork();
    }
    return art;
  }

function buildCard(record) {
    var article = document.createElement("article");
    article.className = "memory-card reveal is-visible";
    article.dataset.memoryId = record.id;

    // Make the entire card interactive.
    article.setAttribute("role", "button");
    article.setAttribute("tabindex", "0");
    article.setAttribute("aria-label", "View memory: " + record.title);

    article.appendChild(buildArt(record));

    var content = document.createElement("div");
    content.className = "memory-card-content";

    var meta = document.createElement("div");
    meta.className = "memory-card-meta";

    var category = document.createElement("span");
    category.className = "memory-category";
    category.textContent = record.category;

    var year = document.createElement("span");
    year.className = "memory-year";
    year.textContent = "SAMPLE · " + record.year;

    meta.appendChild(category);
    meta.appendChild(year);

    var title = document.createElement("h3");
    title.textContent = record.title;

    var description = document.createElement("p");
    description.className = "memory-card-summary";
    description.textContent = record.summary;

    var footer = document.createElement("div");
    footer.className = "memory-card-footer";

    var status = document.createElement("span");
    status.className = "memory-status";

    var statusDot = document.createElement("i");
    statusDot.setAttribute("aria-hidden", "true");

    var statusText = document.createElement("span");
    statusText.textContent = record.status || "Pending approval";

    status.appendChild(statusDot);
    status.appendChild(statusText);

    var openButton = document.createElement("button");
    openButton.type = "button";
    openButton.className = "memory-open";
    openButton.textContent = "↗";
    openButton.setAttribute("aria-label", "Preview " + record.title);

    // Arrow button opens the same preview.
    openButton.addEventListener("click", function (event) {
        event.stopPropagation();
        openMemory(record, openButton);
    });

    footer.appendChild(status);
    footer.appendChild(openButton);

    content.appendChild(meta);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(footer);

    article.appendChild(content);

    // Clicking anywhere on the card opens the preview.
    article.addEventListener("click", function (event) {
        if (event.target.closest("button, a, input, select, textarea")) {
            return;
        }

        openMemory(record, article);
    });

    // Keyboard accessibility: Enter or Space opens the preview.
    article.addEventListener("keydown", function (event) {
        if (event.target !== article) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openMemory(record, article);
        }
    });

    return article;
}

  function getMatches() {
    var query = searchInput.value.trim().toLocaleLowerCase();
    var category = categorySelect.value;
    var year = yearSelect.value;
    return records.filter(function (record) {
      var matchesCategory = category === "all" || record.category === category;
      var matchesYear = year === "all" || String(record.year) === year;
      var searchable = [record.title, record.category, record.summary, record.year, record.tag].join(" ").toLocaleLowerCase();
      return matchesCategory && matchesYear && (!query || searchable.indexOf(query) !== -1);
    });
  }

  function renderMemories() {
    var matches = getMatches();
    var visible = matches.slice(0, Number(config.homepageLimit) || 8);
    grid.replaceChildren();
    visible.forEach(function (record) { grid.appendChild(buildCard(record)); });
    grid.setAttribute("aria-busy", "false");
    var hasFilter = searchInput.value.trim() || categorySelect.value !== "all" || yearSelect.value !== "all";
    if (matches.length === 0) {
      countText.textContent = "0 sample moments found";
    } else if (matches.length > visible.length) {
      countText.textContent = matches.length + " sample moments found · showing " + visible.length;
    } else {
      countText.textContent = matches.length + (matches.length === 1 ? " sample moment found" : " sample moments found") + (hasFilter ? " · filtered results" : "");
    }
    emptyState.hidden = matches.length !== 0;
    grid.hidden = matches.length === 0;
    document.querySelector(".memory-bottom").hidden = false;
    updateArchiveLinks();
  }

  function openMemory(record, trigger) {
    lastFocusedElement = trigger || document.activeElement;
    dialogArt.replaceChildren(buildArt(record));
    dialogCategory.textContent = record.category + " · SAMPLE " + record.year;
    dialogTitle.textContent = record.title;
    dialogDescription.textContent = record.summary + " This entry is illustrative and requires approved event details and photography before publication.";
    updateArchiveLinks();
    if (typeof memoryDialog.showModal === "function") {
      memoryDialog.showModal();
      document.body.classList.add("dialog-open");
      var closeButton = memoryDialog.querySelector(".dialog-close");
      if (closeButton) closeButton.focus();
    } else if (window.MomentsUI) {
      window.MomentsUI.toast("Your browser does not support the memory preview dialog. Please use a current browser.");
    }
  }

  function clearFilters(showMessage) {
    searchInput.value = "";
    categorySelect.value = "all";
    yearSelect.value = "all";
    renderMemories();
    if (showMessage && window.MomentsUI) window.MomentsUI.toast("Filters cleared. Showing all sample memories.");
    searchInput.focus();
  }

  searchInput.addEventListener("input", renderMemories);
  categorySelect.addEventListener("change", renderMemories);
  yearSelect.addEventListener("change", renderMemories);
  clearButton.addEventListener("click", function () { clearFilters(true); });
  emptyClearButton.addEventListener("click", function () { clearFilters(false); });

  if (memoryDialog) {
    memoryDialog.addEventListener("close", function () {
      document.body.classList.remove("dialog-open");
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
    });
    memoryDialog.addEventListener("cancel", function () { document.body.classList.remove("dialog-open"); });
  }

  document.querySelectorAll("[data-event-info='diwali']").forEach(function (button) {
    button.addEventListener("click", function () {
      if (window.MomentsUI) window.MomentsUI.toast("Diwali is an illustrative concept card. Lentra's date, venue and activities must be confirmed by HR.");
    });
  });
  var suggest = document.getElementById("suggest-moment");
  if (suggest) suggest.addEventListener("click", function () { if (window.MomentsUI) window.MomentsUI.dialogNotice("notice-dialog"); });

  function setQuote(index) {
    var quotes = Array.isArray(window.MOMENTS_QUOTES) ? window.MOMENTS_QUOTES : [];
    if (!quotes.length || !quoteText) return;
    currentQuote = (index + quotes.length) % quotes.length;
    quoteText.style.opacity = "0";
    window.setTimeout(function () {
      quoteText.textContent = quotes[currentQuote];
      quoteText.style.opacity = "1";
      if (quoteIndex) quoteIndex.textContent = String(currentQuote + 1).padStart(2, "0") + " / " + String(quotes.length).padStart(2, "0");
    }, 140);
  }
  var prevQuote = document.getElementById("quote-prev");
  var nextQuote = document.getElementById("quote-next");
  if (prevQuote) prevQuote.addEventListener("click", function () { setQuote(currentQuote - 1); });
  if (nextQuote) nextQuote.addEventListener("click", function () { setQuote(currentQuote + 1); });

  /* Restore archive query parameters when the user returns to the homepage. */
  var params = new URLSearchParams(window.location.search);
  if (params.has("q")) searchInput.value = params.get("q") || "";
  if (params.has("category") && Array.prototype.some.call(categorySelect.options, function (option) { return option.value === params.get("category"); })) categorySelect.value = params.get("category");
  if (params.has("year") && Array.prototype.some.call(yearSelect.options, function (option) { return option.value === params.get("year"); })) yearSelect.value = params.get("year");
  renderMemories();
})();
