// products.js - handles product list and adding products
let products = JSON.parse(localStorage.getItem('products')) || [
  // Sample product data
  {
    name: "Example Product",
    image: "https://via.placeholder.com/150",
    price: 100,
    category: "Sample",
    description: "This is a sample product."
  }
];

function displayProducts() {
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  products.forEach((product, index) => {
    const prodDiv = document.createElement('div');
    prodDiv.className = 'product';
    prodDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart" data-index="${index}">Add to Cart</button>
    `;
    container.appendChild(prodDiv);
  });
  // Attach add-to-cart listeners after rendering
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-index');
      addToCart(products[idx]);
    });
  });
}

// Handle new product form submission
const productForm = document.getElementById('product-form');
if (productForm) {
  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProduct = {
      name: document.getElementById('product-name').value,
      image: document.getElementById('product-image').value,
      price: parseFloat(document.getElementById('product-price').value),
      category: document.getElementById('product-category').value,
      description: document.getElementById('product-description').value
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    productForm.reset();
  });
}

// Display products on page load
window.addEventListener('DOMContentLoaded', () => {
  displayProducts();
});
