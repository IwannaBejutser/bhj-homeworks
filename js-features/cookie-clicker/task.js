const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let sizeFlag = true;

cookie.addEventListener('click', () => {
	counter.textContent = parseInt(counter.textContent) + 1;
});

cookie.addEventListener('mousedown', () => {
	cookie.width = 150;
});

cookie.addEventListener('mouseup', () => {
	cookie.width = 200;
});
