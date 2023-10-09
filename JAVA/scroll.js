// Sélectionnez le conteneur des images à défilement
const scrollingImages = document.querySelector('.scrolling_img');
let scrollPosition = 0;

// Obtenez toutes les images dans un tableau
const images = Array.from(scrollingImages.querySelectorAll('img'));

// Mélangez l'ordre des images de manière aléatoire
shuffleArray(images);

// Créez un nouvel élément div pour contenir les images
const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

// Ajoutez les images mélangées au conteneur
images.forEach((image) => {
    imageContainer.appendChild(image);
});

// Ajoutez le conteneur d'images au conteneur principal
scrollingImages.appendChild(imageContainer);

function scrollImages() {
    scrollPosition -= 1;
    imageContainer.style.transform = `translateX(${scrollPosition}px)`;

    // Réinitialisez la position si toutes les images ont été défilées
    if (scrollPosition <= -imageContainer.clientWidth) {
        scrollPosition = 0;
    }

    requestAnimationFrame(scrollImages);
}

// Appel initial
scrollImages();

// Fonction pour mélanger un tableau de manière aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

