console.log("JS connected");

// =====================
// SCROLL EFFECT
// =====================

window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if (!header) return;

if (window.scrollY > 50) {
header.style.background = "#fff";
header.style.boxShadow = "0 4px 20px rgba(0,0,0,.1)";
} else {
header.style.background = "transparent";
header.style.boxShadow = "none";
}

});

// =====================
// DARK MODE
// =====================

const darkBtn = document.getElementById("darkToggle");

if (darkBtn) {
darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
}

// LOAD THEME
window.addEventListener("load", () => {
if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
}
});

// =====================
// CART SYSTEM
// =====================

let cartCount = 0;

const cartCountEl = document.getElementById("cartCount");

let saved = localStorage.getItem("cartCount");

if (saved) {
cartCount = parseInt(saved);
if (cartCountEl) cartCountEl.textContent = cartCount;
}