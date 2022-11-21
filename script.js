const img = document.querySelector('img');
const changeImgButton = document.querySelector('button');
let search = document.querySelector('.search-box');
const form = document.querySelector('form');

changeImgButton.addEventListener('click', changeImage);
async function changeImage(e) {
	let search = document.querySelector('.search-box');
	let searchValue = search.value;
	if (!searchValue) {
		searchValue = 'point up';
	}
	e.preventDefault();
	const response = await fetch(
		'https://api.giphy.com/v1/gifs/translate?api_key=U7U0b65VE1bA9GhsdHXTqW9M4ndypm7q&s=' +
			searchValue,
		{ mode: 'cors' }
	);
	const imgData = await response.json();

	img.src = imgData.data.images.original.url;
}
document.addEventListener('DOMContentLoaded', changeImage);
