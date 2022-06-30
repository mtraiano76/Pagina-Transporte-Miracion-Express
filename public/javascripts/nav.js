var toggle = document.getElementById('menuToggle');
var nav = document.getElementsByTagName('nav')[0];

document.addEventListener('click', function(e) {
    var navClicked = nav.contains(e.target);
    if (!navClicked) {
        nav.classList.remove('abierto');
    }
});

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle('abierto');
});
