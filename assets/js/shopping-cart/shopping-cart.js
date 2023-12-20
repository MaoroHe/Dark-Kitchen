document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('shopping-cart');
    let panier = document.querySelector('div.panier');
    let maine = document.querySelector('main')
    const closeButton = document.getElementById('close')

    addToCartButton.addEventListener('click', function () {
        panier.classList.toggle('carton');
    });

    closeButton.addEventListener('click', function () {
        panier.classList.toggle('carton');
    });
});

//

const addToCartButton = document.querySelectorAll('button.paye');
const lesul = document.querySelector('ul.item');
const panier = [];

const clickOnCart = (e) => {
    const article = e.target.classList[2];

    // Vérifier si l'article est déjà dans le panier
    const existingItemIndex = panier.findIndex(item => item.article === article);

    if (existingItemIndex !== -1) {
        // Si l'article est déjà dans le panier, augmenter ou diminuer la quantité
        const newQuantity = panier[existingItemIndex].quantity + 1;
        panier[existingItemIndex].quantity = newQuantity;

    } else {
        // Si l'article n'est pas dans le panier, l'ajouter avec une quantité de 1
        const newItem = { article, quantity: 1 };
        panier.push(newItem);
    }

    // Mettre à jour l'affichage du panier
    afficherPanier();
}

// Afficher le contenu du panier
function afficherPanier() {
    // Effacer le contenu actuel du panier
    lesul.innerHTML = '';

    // Afficher chaque article dans le panier
    panier.forEach(item => {
        let liCreator = document.createElement('li');
        let commandText = document.createTextNode(`${item.article} est dans votre panier en ${item.quantity} exemplaire(s) !`);
        liCreator.className = `${item.article} li`;

        lesul.appendChild(liCreator);
        liCreator.appendChild(commandText);
        liCreator.className = item.article;
    });
}

for (let actionSquare of addToCartButton) {
    actionSquare.addEventListener('click', clickOnCart);
}