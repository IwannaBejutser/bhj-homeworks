const revealBlock = document.querySelector('.reveal');

function isVisible(el) {
	const { top, bottom } = revealBlock.getBoundingClientRect();

	if (bottom < 0) {
		return false;
	}

	if (top > window.innerHeight) {
		return false;
	}

	revealBlock.classList.add('reveal_active');
}

setInterval(() => {
	console.log(isVisible(revealBlock));
});
