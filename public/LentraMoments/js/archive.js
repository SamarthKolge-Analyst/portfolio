/* Archive route preparation: preserves homepage filters without faking a complete gallery. */
(function () {
  "use strict";
  var params = new URLSearchParams(window.location.search);
  var pieces = [];
  if (params.get("q")) pieces.push('Search: “' + params.get("q") + '”');
  if (params.get("category")) pieces.push("Category: " + params.get("category"));
  if (params.get("year")) pieces.push("Sample year: " + params.get("year"));
  var backQuery = params.toString();
  var backHref = "index.html" + (backQuery ? "?" + backQuery : "") + "#memories";
  document.querySelectorAll('a[href="index.html#memories"]').forEach(function (link) { link.href = backHref; });
  var output = document.getElementById("archive-search-summary");
  if (output) {
    output.textContent = pieces.length ? "Selected from homepage — " + pieces.join(" · ") : "Full archive experience · planned next phase";
  }
  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();



