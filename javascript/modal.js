const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popupContainer = document.getElementById("popupContainer");

openPopupBtn.addEventListener("click", () => {
    popupContainer.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

// script.js
const cartButton = document.querySelector('.floating-cart .btn');

cartButton.addEventListener('click', () => {
    // Aquí podrías agregar la lógica para abrir el carrito de compra
    // Por ejemplo, redirigir a la página del carrito o mostrar un pop-up
});