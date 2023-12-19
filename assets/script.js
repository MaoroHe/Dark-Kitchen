
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});




const menu = [
    {
        name: "Margherita",
        prix: "12€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Basilic"],
        picture: "img/margherita-pizza.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Prosciutto",
        prix: "13€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Jambon"],
        picture: "img/prosciutto.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Napoli",
        prix: "14€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Anchois", "Câpres", "Olives noires"],
        picture: "img/napoli.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Quattro Formaggi",
        prix: "14€50",
        ingredient: ["Sauce tomate", "Fleur de lait", "Gorgonzola", "Parmesan", "Taleggio"],
        picture: "img/fromages.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Calzone",
        prix: "14€50",
        ingredient: ["Sauce tomate", "Fleur de lait", "Jambon", "Champignons", "Oignons", "Oeuf", "Olives noires"],
        picture: "img/calzone.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Parmiggiana",
        prix: "15€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Parmesan", "Aubergines", "Roquette"],
        picture: "img/parmigiana.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Caprese",
        prix: "15€50",
        ingredient: ["Fleur de lait", "Bufala", "Parmesan", "Tomates Fraîches", "Roquette"],
        picture: "img/caprese.jpg",
        categorie: 'Blanche',
    },
    {
        name: "Pèpè",
        prix: "17€50",
        ingredient: ["Pesto", "Fleur de lait", "Burrata", "Tomates Semi-Séchée"],
        picture: "img/pepe.jpg",
        categorie: 'Blanche',
    },
    {
        name: "Trinachia",
        prix: "17€",
        ingredient: ["Fleur de lait", "Jambon de parme", "Roquette", "Copeaux de parmesan", "Crème balsamique"],
        picture: "img/trinachia.jpg",
        categorie: 'Blanche',
    },
];

//

function cardCreator() {
}

//


function validateForm() {
    let customerName = document.getElementById('customerName').value;
    let customerAddress = document.getElementById('customerAddress').value;
    let items = document.getElementById('items').value;

    if (customerName === "" || customerAddress === "" || items === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }

    return true;
}

//

let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.item');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}