let container = document.querySelector('.container');
let input = document.querySelector('#input');
let inputLog = [];
input.addEventListener('input', e => {
    console.log(e.data);
    if (Number.isInteger(e.data / 1) && (Math.sign(e.data / 1) >= 0) && e.data)
    {
        inputLog.unshift(e.data);
        console.log(inputLog);
        let parsedNum = 0
        counter = 1
        inputLog.forEach(log => {
            parsedNum += (log * counter);
            counter *= 10;
        })
        if (parsedNum <=100)
        {
            createGrid(parsedNum);
        }
        else
        {
            input.value = '';
            inputLog = [];
            deleteGrid();
            let p = document.querySelector('#warning');
            p.textContent = 'Number must be less than 100';
        }
    }
    else if (e.data === 'null')
    {
        input.value = '';
        inputLog = [];
        deleteGrid();
    }
    else
    {
        input.value = '';
        inputLog = [];
        deleteGrid();
    }
})

function createGrid (parsedNum)
{
    deleteGrid()
    let p = document.querySelector('#warning');
    p.textContent = '';
    let sqrt = Math.sqrt(parsedNum);
    console.log(sqrt);
    for (let i = 0; i < parsedNum; i++)
    {
        div = document.createElement('div');
        div.classList.add('grid');
        div.textContent = 'hi';
        div.style.width = `${90 / sqrt}vw`
        div.style.height = `${70 / sqrt}vh`
        container.appendChild(div);
    }
}

function deleteGrid ()
{
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}


let grid = document.querySelectorAll('.grid');

grid.forEach(cell => {
    cell.addEventListener('mouseover', e => {
        e.target.classList.add('hover');
    });
});