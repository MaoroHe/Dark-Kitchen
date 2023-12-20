const menu = [
    {
        name: "Margherita",
        prix: "12€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Basilic"],
        picture: "assets/img/margherita-pizza.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Prosciutto",
        prix: "13€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Jambon"],
        picture: "assets/img/prosciutto.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Napoli",
        prix: "14€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Anchois", "Câpres", "Olives noires"],
        picture: "assets/img/napoli.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Quattro-Formaggi",
        prix: "14€50",
        ingredient: ["Sauce tomate", "Fleur de lait", "Gorgonzola", "Parmesan", "Taleggio"],
        picture: "assets/img/fromages.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Calzone",
        prix: "14€50",
        ingredient: ["Sauce tomate", "Fleur de lait", "Jambon", "Champignons", "Oignons", "Oeuf", "Olives noires"],
        picture: "assets/img/calzone.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Parmiggiana",
        prix: "15€",
        ingredient: ["Sauce tomate", "Fleur de lait", "Parmesan", "Aubergines", "Roquette"],
        picture: "assets/img/parmigiana.jpg",
        categorie: 'Tomate',
    },
    {
        name: "Caprese",
        prix: "15€50",
        ingredient: ["Fleur de lait", "Bufala", "Parmesan", "Tomates Fraîches", "Roquette"],
        picture: "assets/img/caprese.jpg",
        categorie: 'Blanche',
    },
    {
        name: "Pèpè",
        prix: "17€50",
        ingredient: ["Pesto", "Fleur de lait", "Burrata", "Tomates Semi-Séchée"],
        picture: "assets/img/pepe.jpg",
        categorie: 'Blanche',
    },
    {
        name: "Trinachia",
        prix: "17€",
        ingredient: ["Fleur de lait", "Jambon de parme", "Roquette", "Copeaux de parmesan", "Crème balsamique"],
        picture: "assets/img/trinachia.jpg",
        categorie: 'Blanche',
    },
];

function cardCreator() {
    for(let item of menu) {
        let pizzaName = item.name;
        let picture = item.picture;
        let price = item.prix;

        const sectionA = document.querySelector('section.food');
        let divCreatorA = document.createElement('div');
        let img = document.createElement('img');
        let titleCreator = document.createElement('h1');
        let priceCreator = document.createElement('h2');

        let titleInjector = document.createTextNode(pizzaName);
        let priceInjector = document.createTextNode(price);


        sectionA.appendChild(divCreatorA);
        divCreatorA.className = `food__card ${pizzaName}`;

        divCreatorA.appendChild(img);
        img.src = `${picture}`;
        img.className = `food__card__image`;

        divCreatorA.appendChild(titleCreator);
        titleCreator.className = 'food__card__title';
        titleCreator.appendChild(titleInjector);

        divCreatorA.appendChild(priceCreator);
        priceCreator.className = 'food__card__price';
        priceCreator.appendChild(priceInjector);

        let divCreatorB = document.createElement('div');
        divCreatorA.appendChild(divCreatorB);
        divCreatorB.className = 'food__card__ing'

        for(let element of item.ingredient) {
            let pCreatorA = document.createElement('p');
            let ingredientInjector = document.createTextNode(element);

            divCreatorB.appendChild(pCreatorA);
            pCreatorA.className = 'food__card__ing__ingredient';
            pCreatorA.appendChild(ingredientInjector);
        };

        let cartButton = document.createElement('button');
        let cartText = document.createTextNode('Add to cart');

        divCreatorA.appendChild(cartButton);
        cartButton.appendChild(cartText)
        cartButton.className = `food__card__cart paye ${pizzaName}`;
    };
};
cardCreator();