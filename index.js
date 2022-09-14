const brushes = document.querySelector('#brushes');
const clear = document.querySelector('#clear');
let isClear = false;
clear.addEventListener('click', () => {
    const canvas = document.querySelector('#defaultCanvas0');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector('.active').classList.remove('active');
    isClear = true;
    draw();

});
const pen = () => {
    stroke(color);
    strokeWeight(2);

    circle(mouseX, mouseY, 50);
}
for (let i = 0; i < 50; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const circle = document.createElement(`div`);
    circle.style.width = `50px`;
    circle.style.marginRight = `10px`;
    circle.style.height = `50px`;
    circle.style.borderRadius = `50%`;
    circle.style.display = `inline-block`;
    circle.style.backgroundColor = '#' + randomColor;
    circle.id = `#${randomColor}`;
    circle.style.cursor = `pointer`;

    circle.addEventListener('click', function (ev) {
        const active = document.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        this.classList.add('active');
    });
    // Add the circle to the page
    brushes.appendChild(circle);
}

function draw() {
    if (mouseIsPressed) {
        strokeWeight(1);
        if (document.querySelector('.active')) {
            const color = document.querySelector('.active').id;
            stroke(color);

        } else {
            stroke(0);
        }
        line(mouseX, mouseY, pmouseX, pmouseY);

    }
}
