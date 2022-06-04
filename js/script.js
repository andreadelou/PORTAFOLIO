let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

// Boton superior que quita menu
menu.onClick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}