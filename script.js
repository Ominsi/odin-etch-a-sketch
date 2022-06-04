const makeGrid = size => {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  const gridTile = document.createElement("div");
  gridTile.classList.add('item');
  gridTile.style.width =`${100/size}%`;
  gridTile.style.height = `${100/size}%`;
  grid.appendChild(gridTile);
 
  
  for (let location = 1; location < size*size; location++) {
      const clonedTile  = gridTile.cloneNode();
      grid.appendChild(clonedTile);
  }
  grid.addEventListener('mouseover', changeColor)
};
const grid = document.querySelector("#grid");
makeGrid(16);


function changeColor (event) {
  event.target.classList.add("hovered");
}
const newGameButton = document.querySelector('button');
newGameButton.addEventListener('click', e => {
  let size = prompt('How many squares (Up To 100): ');
  if (size > 100) {
    alert("Invalid: Squares must be less than or equal to 100");
    return;
  }
  makeGrid(size);
});