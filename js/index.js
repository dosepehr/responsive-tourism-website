



var $ = document;

const opener = $.querySelector('.menu-opener');
const menu = $.querySelector('.menu');
const closer = $.querySelector('.menu-closer');
opener.addEventListener('click', function () {
    opener.classList.toggle('active');
    menu.classList.toggle('show');
    closer.classList.toggle('close');
});
closer.addEventListener('click', function () {
    opener.classList.toggle('active');
    menu.classList.toggle('show');
    closer.classList.toggle('close');
});