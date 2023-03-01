function randomRgbColor() {
    const r = Math.floor((Math.random() * 100)) + 150;
    const g = Math.floor((Math.random() * 100)) + 150;
    const b = Math.floor((Math.random() * 100)) + 150;
    return [r, g, b];

}

function makeGrid(num) {
    for (let i = 1; i <= num; i = i + 1) {
        const flexBasis = `${100/num}%`;
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.flexBasis = flexBasis;
        container.appendChild(row);
        for (let j = 1; j <= num; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.flexBasis = flexBasis;
            square.pass = 0;
            const [r,g,b] = randomRgbColor();
            // console.log(r, g, b);
            square.addEventListener('mouseenter', () => {
                if (square.pass == 10) {
                    return;
                }
                if (square.pass == 9){
                    square.style.backgroundColor = `rgb(0,0,0)`;
                    square.pass++;
                    return;
                }
                const rNew = r - Math.floor(r*square.pass*0.1);
                const gNew = g - Math.floor(g*square.pass*0.1);
                const bNew = b - Math.floor(b*square.pass*0.1);

                square.style.backgroundColor = `rgb(${rNew},${gNew}, ${bNew})`;
                square.pass++;
            });
            row.appendChild(square);
        }
    }
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
}

const description = document.querySelector('.description');
const info = document.querySelector('.info');

info.addEventListener('mouseenter', () => description.style.display = 'block');
info.addEventListener('mouseleave', () => description.style.display = 'none');

const container = document.querySelector('.container');
makeGrid(16);

const resize = document.querySelector('.resize-img');
resize.addEventListener('click', () => {
    let gridSize = prompt('Number of squares on each side: ', '16');
    console.log(typeof +gridSize);
    while (isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
        alert('You may only enter an integer from 1 till 100');
        gridSize = prompt('Number of squares on each side: ');
    };
    removeAllChildren(container);
    makeGrid(gridSize);
});

