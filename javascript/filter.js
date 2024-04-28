document.addEventListener("DOMContentLoaded", function() {
    displayProducts(products);
});

const products = [
    { id: 1, name: "Motorola G23 128GB White", category: "Electronics", price: 383, image: "./images/celphones/motorola_G23_White.png", description: "Lorem ipsum dolor sit amet.", rating: 4.5 },
    { id: 2, name: "Suono Bluetooth In Ear Headphones", category: "Music", price: 50, image: "../images//music/headphones_Suono.png", description: "Lorem ipsum dolor sit amet.", rating: 5  },
    { id: 3, name: "Notebook Lenovo IdeaPad 15.6”", category: "notebooks", price: 1182, image: "..//images/notebooks/Notebook_Lenovo_IdeaPad_15,6.png", description: "Lorem ipsum dolor sit amet.", rating: 4.5 },
    { id: 4, name: "Blender", category: "Home", price: 150 },
    { id: 5, name: "Toy Car", category: "Toys", price: 25 },
    { id: 6, name: "Basketball", category: "Sports", price: 30 }
];

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `<strong>${product.name}</strong><br>Category: ${product.category}<br>Price: $${product.price}`;
        productList.appendChild(productCard);
    });
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(input => input.value);
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    const filteredProducts = products.filter(product => {
        const inCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const aboveMinPrice = !minPrice || product.price >= minPrice;
        const belowMaxPrice = !maxPrice || product.price <= maxPrice;
        return inCategory && aboveMinPrice && belowMaxPrice;
    });

    displayProducts(filteredProducts);
}