let currentImageIndex = 0;
let currentImages = [];

// Filter Images
function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Open Lightbox
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;

  // Store all images in the current category
  currentImages = [...img.closest(".gallery-item").querySelectorAll("img")];
  currentImageIndex = currentImages.indexOf(img);
}

// Close Lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Change Image (Next/Prev)
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = currentImages.length - 1;
  if (currentImageIndex >= currentImages.length) currentImageIndex = 0;

  document.getElementById("lightbox-img").src = currentImages[currentImageIndex].src;
}
