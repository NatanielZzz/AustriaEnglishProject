// function refreshPage() {
//     window.location.reload();
// }

// // Add event listener specifically to .img3
// document.querySelector('.img3').addEventListener('click', function(event) {
//     refreshPage();
// });


var images = ['austria6.jpg', 'austria7.jpg', 'austria8.jpg', 'austria4.jpg'];
var randomIndex = Math.floor(Math.random() * images.length);
var randomImage = images[randomIndex];
document.getElementById('randomImage').src = randomImage;


