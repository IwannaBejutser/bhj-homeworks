const revealBlocks = document.querySelectorAll('.reveal');

function isVisible(el) {
	const { top, bottom } = el.getBoundingClientRect();
	return top < window.innerHeight && bottom > 0;
}

setInterval(() => {
	revealBlocks.forEach((block) => {
		if (isVisible(block)) {
			block.classList.add('reveal_active');
		} else {
			block.classList.remove('reveal_active');
		}
	});
}, 100);
