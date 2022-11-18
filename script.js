const img = document.querySelector('img');
const changeImgButton = document.querySelector('button');
let search = document.querySelector('.search-box');
const form = document.querySelector('form');

changeImgButton.addEventListener('click', changeImage);
async function changeImage(e) {
	let search = document.querySelector('.search-box');
	let searchValue = search.value;
	e.preventDefault();
	fetch(
		'https://api.giphy.com/v1/gifs/translate?api_key=U7U0b65VE1bA9GhsdHXTqW9M4ndypm7q&s=' +
			searchValue,

		{ mode: 'cors' }
	)
		.then(function (response) {
			console.log(search.value);
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		})
		.catch(function (err) {
			console.log(err);
		});
}
changeImage();
