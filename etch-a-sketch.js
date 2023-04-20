let container = document.querySelector('.container');
for(let i = 0; i < 16; i++)
{
    div = document.createElement('div');
    div.classList.add('grid');
    div.textContent = 'hi';
    container.appendChild(div);
}

let grid = document.querySelectorAll('.grid');

grid.forEach(cell => {
    cell.addEventListener('mouseover', e => {
        e.target.classList.add('hover');
    });
});