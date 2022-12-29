var $ = document;

const opener = $.querySelector('.menu-opener');
const menu = $.querySelector('.menu');
const closer = $.querySelector('.menu-closer');
const overlay = $.querySelector('.overlay2')

opener.addEventListener('click', function () {
    opener.classList.toggle('active');
    menu.classList.toggle('show');
    closer.classList.toggle('close');
    overlay.classList.toggle('active')
});


closer.addEventListener('click', function () {
    opener.classList.toggle('active');
    menu.classList.toggle('show');
    closer.classList.toggle('close');
    overlay.classList.toggle('active')
});


overlay.onclick = () => {
    opener.classList.toggle('active');
    menu.classList.toggle('show');
    closer.classList.toggle('close');
    overlay.classList.toggle('active')
}