"use strict";


/*MODAL FOR BASKET & FAVORITES*/

const favoritesLinks = document.querySelectorAll(".favorites-button");
const menuFavorites = document.querySelector(".favorites");
let favoritesNumber = document.querySelector(".favorites-number");
let counterFavorites = 0;


const basketLinks = document.querySelectorAll(".buy-button");
const menubasket = document.querySelector(".basket");
const basketNumber = document.querySelector(".basket-number");
let counterBasket = 0;


const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelector(".modal-close");
const basketContinue = basketPopup.querySelector(".button-continue");



for (let basketLink of basketLinks) {
    basketLink.onclick = function (evt) {
        evt.preventDefault();
        basketPopup.classList.add("modal-show");
        counterBasket++;
        basketNumber.textContent = counterBasket;
        menubasket.classList.add("menu-button-full");
    }
};

basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
});

basketContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
});

for (let oneFavorite of favoritesLinks) {
    oneFavorite.onclick = function (evt) {
        evt.preventDefault();
        counterFavorites++;
        favoritesNumber.textContent = counterFavorites;
        menuFavorites.classList.add("menu-button-full");
    }
};
