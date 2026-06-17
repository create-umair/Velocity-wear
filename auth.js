const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTab.addEventListener("click", () => {
loginForm.style.display = "block";
registerForm.style.display = "none";
});

registerTab.addEventListener("click", () => {
loginForm.style.display = "none";
registerForm.style.display = "block";
});

loginForm.addEventListener("submit", (e) => {
e.preventDefault();
localStorage.setItem("user", "loggedIn");
window.location.href = "index.html";
});

registerForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("Account created!");
loginForm.style.display = "block";
registerForm.style.display = "none";
});