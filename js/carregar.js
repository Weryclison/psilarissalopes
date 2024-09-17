export default function carregar() {
  window.onload = function () {
    const loadingContainer = document.querySelector(".loading-container");
    const loadingImage = document.querySelector(".loading-image");

    setTimeout(function () {
      loadingImage.style.opacity = "1";
      loadingImage.style.transform = "translateY(0)";
    }, 100);

    setTimeout(function () {
      loadingContainer.classList.add("loaded");
    }, 1000);
  };
}
