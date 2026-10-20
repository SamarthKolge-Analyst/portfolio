(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("culture-lightbox");

    if (!lightbox) return;

    const cards = Array.from(
      document.querySelectorAll(".js-culture-lightbox")
    );

    const image = document.getElementById("culture-lightbox-image");
    const title = document.getElementById("culture-lightbox-title");
    const counter = document.getElementById("culture-lightbox-counter");

    const closeButton = document.getElementById("culture-lightbox-close");
    const previousButton = document.getElementById("culture-lightbox-prev");
    const nextButton = document.getElementById("culture-lightbox-next");

    let currentIndex = 0;
    let previouslyFocused = null;

    if (
      !image ||
      !title ||
      !counter ||
      !closeButton ||
      !previousButton ||
      !nextButton ||
      !cards.length
    ) {
      console.error("Culture lightbox: Required elements or photo cards are missing.");
      return;
    }

    function showImage(index) {
      if (!cards.length) return;

      currentIndex = (index + cards.length) % cards.length;

      const card = cards[currentIndex];
      const thumbnail = card.querySelector("img");
      const imageUrl = card.getAttribute("href");

      if (!imageUrl) {
        console.error("Culture lightbox: Missing image URL.", card);
        return;
      }

      const caption =
        card.dataset.caption ||
        (thumbnail && thumbnail.alt) ||
        "Lentra Moments";

      image.classList.remove("is-loaded");
      image.onload = null;
      image.onerror = null;

      title.textContent = caption;

      counter.textContent =
        String(currentIndex + 1).padStart(2, "0") +
        " / " +
        String(cards.length).padStart(2, "0");

      image.alt = (thumbnail && thumbnail.alt) || caption;

      image.onload = function () {
        image.classList.add("is-loaded");
      };

      image.onerror = function () {
        console.error("Culture lightbox: Failed to load image:", imageUrl);
      };

      image.src = imageUrl;

      if (image.complete && image.naturalWidth > 0) {
        image.classList.add("is-loaded");
      }
    }

    function openLightbox(index) {
      previouslyFocused = document.activeElement;

      showImage(index);

      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("culture-lightbox-open");

      closeButton.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("culture-lightbox-open");

      image.onload = null;
      image.onerror = null;
      image.removeAttribute("src");
      image.classList.remove("is-loaded");

      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    }

    // Open a photo when its card is clicked.
    cards.forEach(function (card, index) {
      card.addEventListener("click", function (event) {
        event.preventDefault();
        openLightbox(index);
      });
    });

    // Previous and Next buttons.
    previousButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      showImage(currentIndex + 1);
    });

    // Close button.
    closeButton.addEventListener("click", function (event) {
      event.preventDefault();
      closeLightbox();
    });

    // Close by clicking the backdrop.
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard controls.
    document.addEventListener("keydown", function (event) {
      if (!lightbox.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showImage(currentIndex + 1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showImage(currentIndex - 1);
      }
    });
  });
})();
