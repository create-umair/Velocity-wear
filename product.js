// ======================
// IMAGE SWITCH
// ======================

function changeImage(src) {
const img = document.getElementById("mainImage");
if (img) img.src = src;
}

// ======================
// QUANTITY CONTROL
// ======================

const qtyInput = document.getElementById("qty");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

if (plusBtn && qtyInput) {
plusBtn.addEventListener("click", () => {
qtyInput.value = parseInt(qtyInput.value) + 1;
});
}

if (minusBtn && qtyInput) {
minusBtn.addEventListener("click", () => {
if (parseInt(qtyInput.value) > 1) {
qtyInput.value = parseInt(qtyInput.value) - 1;
}
});
}

// ======================
// SIZE SELECTION
// ======================

const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(btn => {
btn.addEventListener("click", () => {

sizeButtons.forEach(b => {
b.style.background = "";
b.style.color = "";
});

btn.style.background = "black";
btn.style.color = "white";

});
});

// ======================
// ADD TO CART
// ======================

const addCartBtn = document.getElementById("addCartBtn");

if (addCartBtn && qtyInput) {

addCartBtn.addEventListener("click", () => {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const product = {
id: Date.now(), // unique id (IMPORTANT FIX)
name: document.getElementById("productName")?.innerText || "Product",
price: parseFloat(document.getElementById("productPrice")?.innerText || 0),
quantity: Number(qtyInput.value),
size: document.querySelector(".size-btn.active")?.innerText || "M"
};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added to cart!");
});

}