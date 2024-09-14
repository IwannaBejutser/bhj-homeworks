const hole = document.querySelectorAll('.hole');
const countKills = document.querySelector('#dead');
const countLose = document.querySelector('#lost');

hole.forEach((element) => {
	element.addEventListener('click', () => {
		if (parseInt(countKills.textContent) === 5) {
			alert('Вы победили!');
			resetStatistics();
		} else if (parseInt(countLose.textContent) === 5) {
			alert('Вы проиграли!');
			resetStatistics();
		}

		if (element.classList.contains('hole_has-mole')) {
			countKills.textContent = parseInt(countKills.textContent) + 1;
		} else {
			countLose.textContent = parseInt(countLose.textContent) + 1;
		}
	});
});

function resetStatistics() {
	countKills.textContent = 0;
	countLose.textContent = 0;
}
