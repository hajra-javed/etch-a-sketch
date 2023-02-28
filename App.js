const container = document.querySelector('.container');

for (let i = 1; i <= 16; i = i+1) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 1; j <= 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        // square.textContent = i*j;
        square.addEventListener('mouseenter',() => square.style.backgroundColor = '#FFFFFF')
        row.appendChild(square);
    }
}