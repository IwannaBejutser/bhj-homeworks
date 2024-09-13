const hole = document.querySelectorAll('.hole');
const countKills = document.querySelector('#dead');
const countLose = document.querySelector('#lost');

hole.forEach((element) => {
	element.addEventListener('click', () => {
		if (element.classList.contains('hole_has-mole')) {
			countKills.textContent = parseInt(countKills.textContent) + 1;
		} else {
			countLose.textContent = parseInt(countLose.textContent) + 1;
		}
	});
});
