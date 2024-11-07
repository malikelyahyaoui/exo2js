// Sélectionne tous les div qui se trouve dans carre-haut
const carreHaut = document.querySelectorAll('.carre-haut > div');

// Sélectionne l'élément avec la classe carrebas
const carreBas = document.querySelector('.carrebas');

// Sélectionne  carrebas pour afficher la couleur en texte
const carreBasCouleur = document.querySelector('.carrebas');

// Parcourt chaque div dans carre-haut
carreHaut.forEach(square => {
    //  événement au clic sur chaque carré
    square.addEventListener('click', () => {
        // Récupère la couleur de fond du carrreé cliqué
        const color = window.getComputedStyle(square).backgroundColor;

        // Change la couleur de fond du carré au carré cliqué
        carreBas.style.backgroundColor = color;

        // Affiche la couleur de fond dans le carre qui est en bas
        carreBasCouleur.textContent = color;
    });
});
