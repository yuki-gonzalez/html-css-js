const botonDrop = document.querySelector('.btn-dropdown');
const listDrop = document.querySelector('.menu-list');
const favicon = botonDrop.querySelectorAll('i');        

botonDrop.addEventListener('click', () => {
	listDrop.classList.toggle('show');
	favicon.forEach(icon => {
		//console.log(icon)
		icon.classList.toggle('icon_show');
	});
	//console.log(favicon)
});