"use strict";


/*SLIDER*/

const sliderSlides = document.querySelectorAll(".slide");
const sliderPagination = document.querySelectorAll(".button-pagination");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonBack = document.querySelector(".slider-button-back");

for (let p = 0; p < sliderPagination.length; p++) {
    sliderPagination[p].addEventListener("click", function (evt) {
        evt.preventDefault();

        for (let onePagination of sliderPagination) {
            onePagination.classList.remove("button-pagination-current");
        };

        for (let sliderSlide of sliderSlides) {
            sliderSlide.classList.remove("slide-current");
        };
        sliderPagination[p].classList.add("button-pagination-current");
        sliderSlides[p].classList.add("slide-current");
    });
};

for (let slnext = 1; slnext < sliderSlides.length; slnext++) {
    sliderButtonNext.addEventListener("click", function (evt) {
        evt.preventDefault();



        for (let onePagination of sliderPagination) {
            onePagination.classList.remove("button-pagination-current");
        };

        for (let sliderSlide of sliderSlides) {
            sliderSlide.classList.remove("slide-current");
        };

        sliderPagination[slnext].classList.add("button-pagination-current");
        sliderSlides[slnext].classList.add("slide-current");
    });
};


for (let slback = sliderSlides.length - 1; slback >= 0; slback = slback - 1) {
    sliderButtonBack.addEventListener("click", function (evt) {
        evt.preventDefault();

        for (let onePagination of sliderPagination) {
            onePagination.classList.remove("button-pagination-current");
        };

        for (let sliderSlide of sliderSlides) {
            sliderSlide.classList.remove("slide-current");
        };

        sliderPagination[slback].classList.add("button-pagination-current");
        sliderSlides[slback].classList.add("slide-current");
    });
};


/*SERVICE TAB*/

const serviceButtons = document.querySelectorAll(".service-button");
const serviceSlides = document.querySelectorAll(".description-one-service");

for (let i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();

        for (let serviceSlide of serviceSlides) {
            serviceSlide.classList.remove("one-service-current");
        };

        for (let serviceButton of serviceButtons) {
            serviceButton.classList.remove("service-button-current");
        };
        serviceButtons[i].classList.add("service-button-current");
        serviceSlides[i].classList.add("one-service-current");
    });
};

/*MODAL-FEEDBACK*/

const feedbackLink = document.querySelector(".contacts-button-map");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
});


/*MODAL-MAP*/

const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});


/*MODAL FOR BASKET & FAVORITES*/

const favoritesLinks = document.querySelectorAll(".favorites-button");
const menuFavorites = document.querySelector(".favorites");
const favoritesNumber = document.querySelector(".favorites-number");
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
