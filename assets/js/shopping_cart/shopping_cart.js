//fontion permettant d'ouvrir/fermer le popup panier
function togglePopup() {
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
}



//=================================



// function afficherCartItems() {
//     conteneurCart.innerHTML = "";
  
//     for (let i = 0; i < cartItems.length; i++) {
//       let content = `
//       <li class="cartItem">
//       ${cartItems[i].title} ${cartItems[i].price}
//       <input type="image" class="btnDelete" alt="delete" onclick="deleteItem(${i})">X</li>
//       `;
//       conteneurCart.innerHTML += content;
//     }
//   };



  // === Tri =====================================

// const buttonAll = document.getElementById("Ball");
// const buttonTomates = document.getElementById("Btomates");
// const buttonCreme = document.getElementById("Bcreme");

// function showAllCards() {
//     main.innerHTML = ""; // Efface le contenu actuel de main

//     menu.forEach((item) => {
//         const card = createCard(item);
//         main.appendChild(card);
//     });
// }

// function showCardsByDivision(categorie) {
//     main.innerHTML = ""; // Efface le contenu actuel de main

//     const filteredItem = menu.filter(item => item.categorie === categorie);

//     filteredItem.forEach((item) => {
//         const card = createCard(item);
//         main.appendChild(card);
//     });
// }

// buttonAll.addEventListener("click", showAllCards);
// buttonTomates.addEventListener("click", () => showCardsByDivision("Btomates"));
// buttonCreme.addEventListener("click", () => showCardsByDivision("Bcreme"));


// document.addEventListener("DOMContentLoaded", showAllCards); //afficher toutes les card quand j'ouvre la page

