const timer = document.getElementById('timer');
let timerText = document.getElementById('timer').textContent;

const interval = setInterval(() => {
	timer.textContent = timerText;
	timerText--;

	if (timerText < 0) {
		clearInterval(interval);
		alertShow('Вы победили в конкурсе!');
	}
}, 1000);

function alertShow(message) {
	alert(message);
}
