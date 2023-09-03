const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = square.querySelector('#circle');
const squareBtn = square.querySelector('#e_btn');
const range = document.querySelector('#range');


btn.addEventListener('click', () => {
    square.style.backgroundColor = input.value;
    input.value = ''
});

squareBtn.style.display = 'none';

range.addEventListener('input', (e) => {
    circle.style.width = `${e.target.value}%`;
    circle.style.height = `${e.target.value}%`;
})

