let elem = document.querySelector("#elem");
console.log(elem.value); // выведет 'text'
elem.addEventListener(`blur`, () => {
    document.querySelector(`p`).textContent = elem.value;
});