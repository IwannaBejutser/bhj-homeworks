const content = document.querySelector('.book');
const switchFontSizeBtn = document.querySelectorAll('.font-size');

for (let index = 0; index < switchFontSizeBtn.length; index++) {
	switchFontSizeBtn[index].addEventListener('click', (event) => {
		event.preventDefault();
		switchFontSizeBtn.forEach((btn) =>
			btn.classList.remove('font-size_active')
		);
		switchFontSizeBtn[index].classList.add('font-size_active');
		content.classList.remove('book_fs-small', 'book_fs-big');
		const size = switchFontSizeBtn[index].getAttribute('data-size');
		if (size === 'small') {
			content.classList.add('book_fs-small');
		} else if (size === 'big') {
			content.classList.add('book_fs-big');
		}
	});
}
