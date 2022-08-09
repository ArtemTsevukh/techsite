let icon_burger = document.querySelector('.icon-burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');


icon_burger.onclick = function(){
    menu.style.display = 'flex';
}

close.onclick = function(){
    menu.style.display = 'none';
}