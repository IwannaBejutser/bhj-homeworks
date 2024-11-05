let switchWord = document.querySelectorAll('.rotator__case');
let activeWord = document.querySelector('.rotator__case_active');

function switchElement() {
	let currentActiveWord = document.querySelector('.rotator__case_active');
	if (currentActiveWord.nextElementSibling == null) {
		currentActiveWord.classList.remove('rotator__case_active');
		switchWord[0].classList.add('rotator__case_active');
	} else {
		currentActiveWord.classList.remove('rotator__case_active');
		currentActiveWord.nextElementSibling.classList.add('rotator__case_active');
	}
}

setInterval(switchElement, 1000);
