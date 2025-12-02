const button = document.getElementById('changeColorBtn');
const colorCode = document.getElementById('colorCode');
const body = document.body;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    colorCode.innerText = newColor;
}

button.onclick = changeColor;
