const basket1 = document.querySelector('.basket1 span');
const basket2 = document.querySelector('.basket2 span');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

let totalApples = 10;
let seconBasket = 0;
let firstBasket = totalApples - seconBasket;
basket1.innerHTML = firstBasket;
basket2.innerHTML = seconBasket;


leftArrow.addEventListener('click', () => {
    if (seconBasket > 0) {
        firstBasket++;
        seconBasket--;
        basket1.innerHTML = firstBasket;
        basket2.innerHTML = seconBasket;
    }
});

rightArrow.addEventListener('click', () => {
    if (firstBasket > 0) {
        firstBasket--;
        seconBasket++;
        basket1.innerHTML = firstBasket;
        basket2.innerHTML = seconBasket;
    }
})