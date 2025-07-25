// --- Product Data (Sample) ---
const products = [
  { id: 1, name: 'Teddy Bear', price: 9.99, image: 'https://img.icons8.com/color/96/000000/teddy-bear.png' },
  { id: 2, name: 'Toy Car', price: 5.49, image: 'https://img.icons8.com/color/96/000000/toy-car.png' },
  { id: 3, name: 'Building Blocks', price: 12.99, image: 'https://img.icons8.com/color/96/000000/lego.png' },
  { id: 4, name: 'Coloring Book', price: 3.99, image: 'https://img.icons8.com/fluency/96/000000/open-book--v2.png' },
  { id: 5, name: 'Chocolate Bar', price: 1.99, image: 'https://img.icons8.com/color/96/000000/chocolate-bar.png' },
  { id: 6, name: 'Doll', price: 7.99, image: 'https://img.icons8.com/color/96/000000/doll.png' },
  { id: 7, name: 'Puzzle', price: 6.49, image: 'https://img.icons8.com/color/96/000000/puzzle.png' },
  { id: 8, name: 'Crayons', price: 2.49, image: 'https://img.icons8.com/fluency/96/000000/crayons.png' },
  // Art items
  { id: 9, name: 'Paint Set', price: 8.99, image: 'https://img.icons8.com/color/96/000000/paint-palette.png' },
  { id: 10, name: 'Sketchbook', price: 4.99, image: 'https://img.icons8.com/fluency/96/000000/spiral-bound-booklet.png' },
  { id: 11, name: 'Watercolors', price: 5.99, image: 'https://img.icons8.com/color/96/000000/paint-brush.png' },
  { id: 12, name: 'Markers', price: 3.49, image: 'https://img.icons8.com/color/96/000000/marker-pen.png' },
  { id: 13, name: 'Stickers', price: 2.99, image: 'https://img.icons8.com/fluency/96/000000/sticker.png' },
  // Food items
  { id: 14, name: 'Cake', price: 4.49, image: 'https://img.icons8.com/color/96/000000/birthday-cake.png' },
  { id: 15, name: 'Egg', price: 1.29, image: 'https://img.icons8.com/color/96/000000/egg.png' },
  { id: 16, name: 'Carrot', price: 0.99, image: 'https://img.icons8.com/color/96/000000/carrot.png' },
  { id: 17, name: 'Broccoli', price: 1.19, image: 'https://img.icons8.com/color/96/000000/broccoli.png' },
  { id: 18, name: 'Apple', price: 1.09, image: 'https://img.icons8.com/color/96/000000/apple.png' },
  { id: 19, name: 'Banana', price: 1.05, image: 'https://img.icons8.com/color/96/000000/banana.png' },
  { id: 20, name: 'Sandwich', price: 2.49, image: 'https://img.icons8.com/color/96/000000/sandwich.png' },
  // Craft items
  { id: 21, name: 'Glitter Glue', price: 2.99, image: 'https://img.icons8.com/color/96/000000/glue.png' },
  { id: 22, name: 'Origami Paper', price: 1.99, image: 'https://img.icons8.com/color/96/000000/origami.png' },
  { id: 23, name: 'Bead Set', price: 3.99, image: 'https://img.icons8.com/color/96/000000/beads.png' },
  { id: 24, name: 'Craft Scissors', price: 2.49, image: 'https://img.icons8.com/color/96/000000/scissors.png' },
  { id: 25, name: 'Foam Sheets', price: 2.29, image: 'https://img.icons8.com/color/96/000000/stack-of-paper.png' },
  { id: 26, name: 'Pipe Cleaners', price: 1.79, image: 'https://img.icons8.com/color/96/000000/chenille.png' },
  { id: 27, name: 'Googly Eyes', price: 1.49, image: 'https://img.icons8.com/color/96/000000/eye.png' },
  // More items
  { id: 28, name: 'Story Book', price: 6.99, image: 'https://img.icons8.com/color/96/000000/book.png' },
  { id: 29, name: 'Tablet', price: 89.99, image: 'https://img.icons8.com/color/96/000000/tablet.png' },
  { id: 30, name: 'Soccer Ball', price: 8.99, image: 'https://img.icons8.com/color/96/000000/soccer-ball.png' },
  { id: 31, name: 'Robot', price: 15.99, image: 'https://img.icons8.com/color/96/000000/robot.png' },
  { id: 32, name: 'Princess Crown', price: 4.99, image: 'https://img.icons8.com/color/96/000000/crown.png' },
  { id: 33, name: 'Magic Wand', price: 3.99, image: 'https://img.icons8.com/color/96/000000/magic-wand.png' },
  { id: 34, name: 'Basketball', price: 12.99, image: 'https://img.icons8.com/color/96/000000/basketball.png' },
  { id: 35, name: 'Jump Rope', price: 5.49, image: 'https://img.icons8.com/color/96/000000/jump-rope.png' },
  { id: 36, name: 'Unicorn', price: 11.99, image: 'https://img.icons8.com/color/96/000000/unicorn.png' },
  { id: 37, name: 'Dragon', price: 13.99, image: 'https://img.icons8.com/color/96/000000/dragon.png' },
  { id: 38, name: 'Princess Dress', price: 18.99, image: 'https://img.icons8.com/color/96/000000/dress.png' },
  { id: 39, name: 'Knight Helmet', price: 9.99, image: 'https://img.icons8.com/color/96/000000/helmet.png' },
  { id: 40, name: 'Castle', price: 24.99, image: 'https://img.icons8.com/color/96/000000/castle.png' },
];

let cart = [];
let reorderHistory = [];

// --- DOM Elements ---
const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const reorderList = document.getElementById('reorderList');

// --- Search Dropdown ---
function showSearchDropdown(query) {
  if (!query.trim()) {
    searchDropdown.classList.remove('show');
    return;
  }
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filtered.length === 0) {
    searchDropdown.classList.remove('show');
    return;
  }
  
  searchDropdown.innerHTML = filtered.map(product => `
    <div class="search-item" onclick="selectFromSearch(${product.id})">
      <img src="${product.image}" alt="${product.name}">
      <div class="search-item-info">
        <div class="search-item-name">${product.name}</div>
        <div class="search-item-price">$${product.price.toFixed(2)}</div>
      </div>
    </div>
  `).join('');
  
  searchDropdown.classList.add('show');
}

function selectFromSearch(productId) {
  addToCart(productId);
  searchInput.value = '';
  searchDropdown.classList.remove('show');
  // Show a brief success message
  const originalText = searchInput.placeholder;
  searchInput.placeholder = 'Added to cart! 🎉';
  setTimeout(() => {
    searchInput.placeholder = originalText;
  }, 1500);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    searchDropdown.classList.remove('show');
  }
});

// --- Render Products ---
function renderProducts(filter = '') {
  productList.innerHTML = '';
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="price">$${product.price.toFixed(2)}</div>
      <button>Add to Cart</button>
    `;
    card.querySelector('button').onclick = () => addToCart(product.id);
    productList.appendChild(card);
  });
}

// --- Cart Logic ---
function addToCart(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  renderCart();
}

function changeQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    renderCart();
  }
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="item-info">
        <strong>${item.name}</strong> <span>($${item.price.toFixed(2)})</span>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>
      <button onclick="removeFromCart(${item.id})">🗑️</button>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total.toFixed(2);
}

// --- Checkout & Reorder ---
checkoutBtn.onclick = () => {
  if (cart.length === 0) return;
  // Save cart to sessionStorage for payment page
  sessionStorage.setItem('cart', JSON.stringify(cart));
  // Save reorder history for after payment
  sessionStorage.setItem('reorderHistory', JSON.stringify(reorderHistory));
  window.location.href = 'payment.html';
};

function renderReorder() {
  reorderList.innerHTML = '';
  reorderHistory.forEach((order, idx) => {
    const li = document.createElement('li');
    li.className = 'reorder-item';
    li.innerHTML = `
      <div class="item-info">Order #${idx + 1} (${order.length} items)</div>
      <button onclick="reorder(${idx})">Re-Order</button>
    `;
    reorderList.appendChild(li);
  });
}

window.reorder = function(idx) {
  if (reorderHistory[idx]) {
    reorderHistory[idx].forEach(item => {
      const inCart = cart.find(i => i.id === item.id);
      if (inCart) {
        inCart.quantity += item.quantity;
      } else {
        cart.push({ ...item });
      }
    });
    renderCart();
  }
};

// --- Search ---
searchInput.addEventListener('input', e => {
  const query = e.target.value;
  showSearchDropdown(query);
  renderProducts(query);
});

// --- Placeholder for Gemini API integration ---
function geminiSuggest() {
  // TODO: Integrate Gemini API for smart suggestions or playful responses
}

// --- Initial Render ---
renderProducts();
renderCart();
renderReorder(); 