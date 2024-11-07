// Sélectionne tous les div qui se trouve dans carre-haut
const carreHaut = document.querySelectorAll('.carre-haut > div');


// Sélectionne l'élément avec la classe carrebas
const carreBas = document.querySelector('.carrebas');

// Parcourt chaque div dans carre-haut
carreHaut.forEach(square => {
    //  événement au clic sur chaque carré
    square.addEventListener('click', () => {
        // Récupère la couleur de fond du carrreé cliqué
        const color = window.getComputedStyle(square).backgroundColor;

        // getBoundingClientRect() pour obtenir les dimensions du carré cliqué
        const { width,height } = square.getBoundingClientRect();

        // Change la couleur de fond du carré au carré cliqué
        carreBas.style.backgroundColor = color;

       
        
        // Afficher toutes les donnés

        carreBas.textContent =`Couleur: ${color}, Largeur: ${(width)}px, Hauteur: ${(height)}px`;

    });
});
