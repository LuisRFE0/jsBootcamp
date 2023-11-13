const h1 = document.querySelector('#title')
function change() {
    h1.innerHTML = "<strong>Me llamo LL</strong>";
}




function cambiarcolor(colors) {
    if (h1.style.color === 'green') {
        h1.style.color = 'black';
    } else {
        h1.style.color = colors
    }
}