let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productGrid = document.getElementById("productGrid");

// ======================
// LOAD FROM BACKEND
// ======================

async function loadProducts() {
try {
const res = await fetch("http://localhost:5000/api/products");
products = await res.json();
displayProducts(products);
} catch (err) {
console.error("Error loading products:", err);
}
}

// ======================
// DISPLAY PRODUCTS
// ======================

function displayProducts(items) {
productGrid.innerHTML = "";

items.forEach(product => {
productGrid.innerHTML += `
<div class="category-card">
<img src="${product.image}" />
<h3>${product.name}</h3>
<p>$${product.price}</p>
<button onclick="addToCart(${product.id})">
Add To Cart
</button>
</div>
`;
});
}

// ======================
// CART SYSTEM
// ======================

function addToCart(id) {
const product = products.find(p => p.id === id);
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}

function updateCartCount() {
const el = document.getElementById("cartCount");
if (el) el.innerText = cart.length;
}

// ======================
// SEARCH
// ======================

document.getElementById("searchInput")?.addEventListener("input", (e) => {
const value = e.target.value.toLowerCase();

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

displayProducts(filtered);
});

// ======================
// CATEGORY FILTER
// ======================

document.getElementById("categoryFilter")?.addEventListener("change", (e) => {
const val = e.target.value;

if (val === "all") return displayProducts(products);

displayProducts(products.filter(p => p.category === val));
});

// ======================
// SORT
// ======================

document.getElementById("sortFilter")?.addEventListener("change", (e) => {
let sorted = [...products];

if (e.target.value === "low-high") {
sorted.sort((a,b) => a.price - b.price);
}

if (e.target.value === "high-low") {
sorted.sort((a,b) => b.price - a.price);
}

displayProducts(sorted);
});

// INIT
loadProducts();
updateCartCount();