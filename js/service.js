const buttonDelivery = document.querySelector(".service-button-delivery");
const buttonGuarantee = document.querySelector(".service-button-guarantee");
const buttonCredit = document.querySelector(".service-button-credit");
const slideDelivery = document.querySelector(".description-service-delivery");
const slideGuaratee = document.querySelector(".description-service-guarantee");
const slideCredit = document.querySelector(".description-service-credit");


buttonDelivery.addEventListener("click", function (evt) {

    buttonDelivery.classList.add("service-button-current");
    slideDelivery.classList.add("one-service-current");

    buttonGuarantee.classList.remove("service-button-current");
    slideGuaratee.classList.remove("one-service-current");

    buttonCredit.classList.remove("service-button-current");
    slideCredit.classList.remove("one-service-current");
});

buttonGuarantee.addEventListener("click", function (evt) {
    buttonGuarantee.classList.add("service-button-current");
    slideGuaratee.classList.add("one-service-current");

    buttonDelivery.classList.remove("service-button-current");
    slideDelivery.classList.remove("one-service-current");

    buttonCredit.classList.remove("service-button-current");
    slideCredit.classList.remove("one-service-current");
});

buttonCredit.addEventListener("click", function (evt) {
    buttonCredit.classList.add("service-button-current");
    slideCredit.classList.add("one-service-current");

    buttonGuarantee.classList.remove("service-button-current");
    slideGuaratee.classList.remove("one-service-current");

    buttonDelivery.classList.remove("service-button-current");
    slideDelivery.classList.remove("one-service-current");
});
