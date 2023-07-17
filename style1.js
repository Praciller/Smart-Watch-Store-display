var $black = document.getElementById('color-1');
var $red = document.getElementById('color-2');
var $purple = document.getElementById('color-3');
var $pink = document.getElementById('color-4');
var $photo = document.getElementById('chage-photo');

$black.addEventListener('click', () => {
    $photo.src = "https://westride-watch-shop.pages.dev/image/black-watch.png";
  });
$red.addEventListener('click', () => {
    $photo.src = "https://westride-watch-shop.pages.dev/image/red-watch.png";
  });
$purple.addEventListener('click', () => {
    $photo.src = "https://westride-watch-shop.pages.dev/image/purple-watch.png";
  });
$pink.addEventListener('click', () => {
    $photo.src = "https://westride-watch-shop.pages.dev/image/pink-watch.png";
  });