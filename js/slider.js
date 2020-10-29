const paginationPerforators = document.querySelector(".button-pagination-perforators");
const paginationDrills = document.querySelector(".button-pagination-drills");
const imgSlider = document.querySelector(".slider");
const slidePerforators = document.querySelector(".slide-perforators");
const slideDrills = document.querySelector(".slide-drills");

paginationPerforators.addEventListener("click", function (evt) {
    paginationDrills.classList.remove("button-pagination-current");
    paginationPerforators.classList.add("button-pagination-current");

    imgSlider.classList.remove("slider-wrapper-drills");
    imgSlider.classList.add("slider-wrapper-perforators");

    slideDrills.classList.remove("slide-current");
    slidePerforators.classList.add("slide-current");
});

paginationDrills.addEventListener("click", function (evt) {
    paginationPerforators.classList.remove("button-pagination-current");
    paginationDrills.classList.add("button-pagination-current");

    imgSlider.classList.remove("slider-wrapper-perforators");
    imgSlider.classList.add("slider-wrapper-drills");

    slidePerforators.classList.remove("slide-current");
    slideDrills.classList.add("slide-current");
});
