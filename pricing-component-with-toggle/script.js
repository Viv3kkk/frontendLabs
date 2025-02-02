let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Yearly = document.querySelectorAll('.price-annually');

checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
        Yearly.forEach(price => price.style.display = "none");
        Monthly.forEach(price => price.style.display = "flex");
    } else {
        Yearly.forEach(price => price.style.display = "flex");
        Monthly.forEach(price => price.style.display = "none");
    }
});