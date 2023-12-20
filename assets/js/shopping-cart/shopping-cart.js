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