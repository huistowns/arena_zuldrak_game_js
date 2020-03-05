// Бургер меню
$('.burger-menu').click( function() {
    $('.burger-menu-links').toggle("fast");
});

// Модальное окно hero-wiki

let openModal = document.querySelector('.alliance-btn');
let closeModal = document.querySelector("#close-modal");
let modalWindowAlliance = document.querySelector('.modal-window__aliance');

openModal.addEventListener('click', function() {
    document.body.style.backgroundColor = "black";
    modalWindowAlliance.style.display = "block";
});

closeModal.addEventListener('click', function() {
    modalWindowAlliance.style.display = "none";
});