var menu = document.getElementById('menu');
var lgMenu = document.getElementById('lgMenu');
var exit = document.getElementById('exit');

menu.addEventListener('click',function(){
    lgMenu.classList.add("enter");
    menu.style.opacity='0';
});

exit.addEventListener('click',function(){
    lgMenu.classList.remove("enter");
    menu.style.opacity='1';
});