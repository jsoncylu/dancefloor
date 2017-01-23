function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeDivColor() {
    
    var idx = Math.floor(Math.random() * (16));
    var div = document.getElementById(idx);
    div.style.backgroundColor = getRandomColor();

}

function timeChange() {
    window.setInterval(changeDivColor, 250);
}