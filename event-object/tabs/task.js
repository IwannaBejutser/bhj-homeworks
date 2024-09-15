const tab = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

tab.forEach((item, index) => {
	item.addEventListener('click', () => {
		tab.forEach((tabItem) => {
			tabItem.classList.remove('tab_active');
			item.classList.add('tab_active');
			content.forEach((contentItem) => {
				contentItem.classList.remove('tab__content_active');
				content[index].classList.add('tab__content_active');
			});
		});
	});
});
