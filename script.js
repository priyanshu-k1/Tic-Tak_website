const clickableDivs = document.querySelectorAll(".tiles"); 
var tokens=["1","2","3","4","5","6","7","8","9"];
var counter=0;
var matrix=[[2,3,4],
            [2,3,4],
            [2,3,4]
          ]


function ToCheck(ValToCheck,Array){
    if (Array.includes(ValToCheck)) {
        return true;
      } else {
        return false;
      }
}
function getElementId(element) {
    return element.id || element.getAttribute('id');
  }
function removeElement(valueToRemove, array) {
    const newArray = array.filter(element => element !== valueToRemove);
    if (array.length > 0) {
      array.splice(0, array.length, ...newArray); 
    }
    return newArray;
  }
function mapOneOrZero(coordinates,val,matrix1){
  if(coordinates==1){matrix1[0][0]=val}
  else if(coordinates==2){matrix1[0][1]=val}
  else if(coordinates==3){matrix1[0][2]=val}
  else if(coordinates==4){matrix1[1][0]=val}
  else if(coordinates==5){matrix1[1][1]=val}
  else if(coordinates==6){matrix1[1][2]=val}
  else if(coordinates==7){matrix1[2][0]=val}
  else if(coordinates==8){matrix1[2][1]=val}
  else if(coordinates==9){matrix1[2][2]=val}
}

function checkZero(tiles) {
  // Check vertical
  for (let i = 0; i < 3; i++) {
    if (tiles[i].every(value => value === 0)) {
      return true;
    }
  }

  // Check horizontal
  for (let i = 0; i < 3; i++) {
    const column = [];
    for (let j = 0; j < 3; j++) {
      column.push(tiles[j][i]);
    }
    if (column.every(value => value === 0)) {
      return true;
    }
  }

  // Check diagonals
  if (tiles[0][0] === 0 && tiles[1][1] === 0 && tiles[2][2] === 0) {
    return true;
  }
  if (tiles[0][2] === 0 && tiles[1][1] === 0 && tiles[2][0] === 0) {
    return true;
  }

  return false;
}
function checkOne(tiles) {
  // Check vertical (similar to checkZero)
  for (let i = 0; i < 3; i++) {
    if (tiles[i].every(value => value === 1)) {
      return true;
    }
  }
  // Check horizontal (use a loop to create the column)
  for (let i = 0; i < 3; i++) {
    const column = [];
    for (let j = 0; j < 3; j++) {
      column.push(tiles[j][i]);
    }
    if (column.every(value => value === 1)) {
      return true;
    }
  }
  // Check diagonals (similar to checkZero)
  if (tiles[0][0] === 1 && tiles[1][1] === 1 && tiles[2][2] === 1) {
    return true;
  }
  if (tiles[0][2] === 1 && tiles[1][1] === 1 && tiles[2][0] === 1) {
    return true;
  }

  return false;
}


// function isWinnig(){
//   if(checkZero(matrix)){


//   }
//   else if(checkOne(matrix)){

//   }
// }
// setInterval(isWinnig, 1000);

function move(cell){
    if(ToCheck(getElementId(cell),tokens)){
        if(counter==0){
            cell.textContent = "O";
            cell.style.background="red";
            counter=0;
        }
        else{
            cell.textContent = "X";
            cell.style.background="green";
            counter=1;
        }
        tokens=removeElement(getElementId(cell),tokens)
        if(counter==1){
          mapOneOrZero(getElementId(cell),counter,matrix)
        }
        else{
          mapOneOrZero(getElementId(cell),counter,matrix)
        }
        console.log(matrix)

    }
    else{
        console.log("Invalid")
    }
    

}