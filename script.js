const img = document.querySelector('img');
const changeImgButton = document.querySelector('button');

changeImgButton.addEventListener('click', changeImage);
function changeImage() {
	fetch(
		'https://api.giphy.com/v1/gifs/translate?api_key=U7U0b65VE1bA9GhsdHXTqW9M4ndypm7q&s=cats',
		{ mode: 'cors' }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		});
}

changeImage();
