let cartCount = 0;

// Get cart button safely
const cartBtn = document.getElementById("cartBtn");

// Get all add-to-cart buttons
const buttons = document.querySelectorAll(".add-cart");

// Load saved cart count (optional improvement)
let savedCount = localStorage.getItem("cartCount");
if (savedCount) {
cartCount = parseInt(savedCount);
if (cartBtn) {
cartBtn.textContent = `Cart (${cartCount})`;
}
}

buttons.forEach(btn => {
btn.addEventListener("click", () => {

cartCount++;

// Save to localStorage
localStorage.setItem("cartCount", cartCount);

// Update UI safely
if (cartBtn) {
cartBtn.textContent = `Cart (${cartCount})`;
}

});
});