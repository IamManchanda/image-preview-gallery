const currentImage = document.querySelector(".current-image");
const images = document.querySelectorAll(".all-images img");

function cleanupImagePreview() {
  currentImage.classList.remove("animate-images");
}

function handleImagePreview(event) {
  currentImage.src = event.target.src;
  currentImage.classList.add("animate-images");
  setTimeout(cleanupImagePreview, 400);
}

images.forEach(function iterateImages(image) {
  image.addEventListener("click", handleImagePreview);
});
