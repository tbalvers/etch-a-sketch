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
    deleteGrid();
    let p = document.querySelector('#warning');
    p.textContent = '';
    let sqrt = Math.sqrt(parsedNum);
    for (let i = 0; i < parsedNum; i++)
    {
        row = document.createElement('row');
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.flex = 'auto'
        for (let j = 0; j < parsedNum; j++)
        {
            div = document.createElement('div');
            div.classList.add('grid');
            div.style.flex = '1 0 auto';
            div.style.width = 'auto';
            row.appendChild(div);

        }
        container.appendChild(row);
    }
    hoverHighlight();
}

function deleteGrid ()
{
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}

function getRandomHex() {
    r = Math.floor(Math.random()*255)
    r = r.toString(16);
    g = Math.floor(Math.random()*255)
    g = g.toString(16);
    b = Math.floor(Math.random()*255)
    b = b.toString(16);
    return (r+g+b);
}

function hoverHighlight()
{
    let grid = document.querySelectorAll('.grid');

    grid.forEach(cell => {
        cell.addEventListener('mouseover', e => {
            if (e.target.style.backgroundColor)
            {
                if (e.target.style.filter)
                {
                    brightness = e.target.style.filter.slice(11,13);
                    e.target.style.filter = `brightness(${brightness - 10}%)`;
                    console.log(e.target.style.filter);
                }
                else
                {
                    e.target.style.filter = 'brightness(90%)';
                }
                
            }
            else
            {
            color = getRandomHex();
            e.target.style.backgroundColor = `#${color}`;
            }
        });
    });
}