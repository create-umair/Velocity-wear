const cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const summaryItems =
document.getElementById("summaryItems");

let total = 0;

cart.forEach(item=>{

const quantity =
item.quantity || 1;

const itemTotal =
item.price * quantity;

total += itemTotal;

summaryItems.innerHTML += `

<div class="summary-item">

<span>
${item.name}
x ${quantity}
</span>

<span>
$${itemTotal.toFixed(2)}
</span>

</div>

`;

});

total += 15;

document
.getElementById("checkoutTotal")
.innerText =
`$${total.toFixed(2)}`;

document
.getElementById("checkoutForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

localStorage.removeItem("cart");

window.location.href =
"success.html";

});