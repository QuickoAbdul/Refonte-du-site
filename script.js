// Variables pour le carrousel
var carousel = document.querySelector('.carousel');
var carouselImages = document.querySelector('.carousel-images');
var imageWidth = carousel.clientWidth;
var currentIndex = 0;

// Fonction pour faire défiler les images
function slideImages() {
  currentIndex++;
  if (currentIndex >= 3) {
    currentIndex = 0;
  }
  carouselImages.style.transform = 'translateX(-' + (currentIndex * imageWidth) + 'px)';
}

// Événement de chargement de la page
window.addEventListener('load', function() {
  setInterval(slideImages, 3000); // Défilement automatique toutes les 3 secondes
});
