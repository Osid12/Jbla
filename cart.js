// cart.js - handles shopping cart using sessionStorage

function addToCart(product) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(product);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}

// Display cart items on cart or checkout page
function displayCartItems() {
  const container = document.getElementById('cart-container') || document.getElementById('checkout-container');
  const isCheckout = !!document.getElementById('checkout-container');
  if (!container) return;
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  container.innerHTML = '';
  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  let total = 0;
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
      </div>
      ${!isCheckout ? '<button class="remove-from-cart" data-index="' + index + '">Remove</button>' : ''}
    `;
    container.appendChild(itemDiv);
    total += item.price;
  });
  if (isCheckout) {
    const totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    container.appendChild(totalDiv);
    sessionStorage.removeItem('cart'); // Clear cart after checkout
  }
  // Attach remove button handlers on cart page
  if (!isCheckout) {
    document.querySelectorAll('.remove-from-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  displayCartItems();
});
