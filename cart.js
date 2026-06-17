let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const container =
document.getElementById("cartContainer");

let discount = 0;

function renderCart(){

container.innerHTML = "";

let subtotal = 0;

cart.forEach((item,index)=>{

const quantity = item.quantity || 1;

subtotal += item.price * quantity;

container.innerHTML += `

<div class="cart-card">

<img
src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
alt=""
>

<div class="cart-info">

<h3>${item.name}</h3>

<p>$${item.price}</p>

<div class="qty-controls">

<button onclick="decreaseQty(${index})">
-
</button>

<span>${quantity}</span>

<button onclick="increaseQty(${index})">
+
</button>

</div>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})"
>
Remove
</button>

</div>

`;

});

updateTotals(subtotal);

}

function updateTotals(subtotal){

const shipping = 15;

const total =
subtotal + shipping - discount;

document.getElementById("subtotal")
.innerText =
`$${subtotal.toFixed(2)}`;

document.getElementById("shipping")
.innerText =
`$${shipping.toFixed(2)}`;

document.getElementById("total")
.innerText =
`$${total.toFixed(2)}`;

}

function removeItem(index){

cart.splice(index,1);

saveCart();

}

function increaseQty(index){

cart[index].quantity =
(cart[index].quantity || 1)+1;

saveCart();

}

function decreaseQty(index){

if((cart[index].quantity || 1)>1){

cart[index].quantity--;

saveCart();

}

}

function saveCart(){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

document
.getElementById("applyCoupon")
.addEventListener("click",()=>{

const code =
document
.getElementById("couponInput")
.value;

if(code==="SAVE10"){

discount = 10;

alert("Coupon Applied!");

renderCart();

}
else{

alert("Invalid Coupon");

}

});

renderCart();