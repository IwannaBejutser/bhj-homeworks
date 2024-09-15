const dropdown = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItem = document.querySelectorAll('.dropdown__link');

dropdown.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active');
});

dropdownListItem.forEach((element) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		dropdown.textContent = element.textContent;
		dropdownList.classList.toggle('dropdown__list_active');
	});
});
