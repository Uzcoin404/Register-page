const signin__btn = document.querySelector("#signin__btn");
const signup__btn = document.querySelector("#register__btn");
const container = document.querySelector(".container");

signup__btn.addEventListener('click', () => {
    container.classList.add("signup-mode");
});

signin__btn.addEventListener('click', () => {
    container.classList.remove("signup-mode");
});

const buttons = document.querySelector('#register__btn');

buttons.addEventListener('click', function(e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    },750);
});
