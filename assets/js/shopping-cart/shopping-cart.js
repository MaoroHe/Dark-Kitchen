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

// function qui ecoute les clics et ajoute la troisieme classe du boutton cliquer qui est egale au nom de la pizza pour la display dans l'ul du panier.

const addToCartButton = document.querySelectorAll('button.paye');
const lesul = document.querySelector('ul.item');

const clickOnCart = (e) => {
    let liCreator = document.createElement('li')
    let commandText = document.createTextNode(e.target.classList[2] + ' est dans votre panier en ' + '' + 'exemplaire(s) !');
    let trieur = e.target.classList[2];

    
        lesul.appendChild(liCreator)
        liCreator.appendChild(commandText)
    

}

for (let actionSquare of addToCartButton) {
    actionSquare.addEventListener('click', clickOnCart)
  }