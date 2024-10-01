const container = document.querySelector('.container');
const button = document.querySelector('#resize-button');

const containerSize = 960;

//GET RANDOM COLOR IR RGB FORMAT - prideti


function createGrid(squaresPerSide) 
{
 
  container.innerHTML = '';

  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
 
  for (let i = 1; i <= squaresPerSide * squaresPerSide; ++i) 
  {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    
    square.addEventListener('mouseover', function () 
    {
      square.style.backgroundColor = 'red';
    });

    container.appendChild(square);
  }
}


function resizeGrid() 
{
  let squaresPerSide = prompt('Enter the number of squares per side (max 100):');

  if (squaresPerSide !== null) 
  {
    squaresPerSide = parseInt(squaresPerSide);

    if (squaresPerSide > 0 && squaresPerSide <= 100) 
    {
      createGrid(squaresPerSide); 
    } 
    else 
    {
      alert('Please enter a number between 1 and 100.');
    }
  }
}


button.addEventListener('click', resizeGrid);

createGrid(16);
