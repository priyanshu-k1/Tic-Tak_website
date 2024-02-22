const clickableDivs = document.querySelectorAll(".tiles"); 
var tokens=["1","2","3","4","5","6","7","8","9"];
var counter=0;
var matrix=[[2,3,4],
            [2,3,4],
            [2,3,4]
          ]
var Player1="Player 1"
var Player2="Player 2"
var playerOneScore=0
var playerTwoScore=0



function generateRandom3DigitNumber() {
  let number = Math.floor(Math.random() * 1000);
  number = number.toString().padStart(3, '0');
  return parseInt(number);
}




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
// Function to decide which player will make first move:::::
// function makeFirstMove(){
//   const paragraph = document.getElementById("nextturn");
//   var num=generateRandom3DigitNumber()
//   if(num%2==0){
//     paragraph.innerText = "Player 1 will make fisrt move";
//   }
//   else{
//     paragraph.innerText = "Player 2 will make fisrt move";
//   }
// }

// makeFirstMove()
function getPlayerNames(){
  const inputElement1 = document.getElementById("Player1");
  const inputElement2 = document.getElementById("Player2");
  const labelElement1 = document.getElementById("playernameID1");
  const labelElement2 = document.getElementById("playernameID2");
  if(inputElement1!=="" && inputElement2!==""){
      Player1=inputElement1.value
      Player2=inputElement2.value
      labelElement1.textContent=Player1
      labelElement2.textContent=Player2
    }
  else if(inputElement1!=="" || inputElement2==""){
      Player1=inputElement1.value
      labelElement1.textContent=Player1
      labelElement2.textContent="Player2"
  }
  else if(inputElement1=="" || inputElement2!==""){
      Player2=inputElement2.value
      labelElement2.textContent=Player2
      labelElement1.textContent="Player1"
  }
  else{
    labelElement1.textContent="Player1"
    labelElement2.textContent="Player2"
  }
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


function isWinnig(){
  const announce=document.getElementById("nextturn");
  if(checkZero(matrix)){
    announce.textContent=Player2+" won"
    playerTwoScore++
    tokens=[];
  }
  else if(checkOne(matrix)){
    announce.textContent=Player1+" won"
    playerOneScore++
    tokens=[];
  }
}
setInterval(isWinnig, 100);

function move(cell){
    if(ToCheck(getElementId(cell),tokens)){
        if(counter==0){
            cell.textContent = "O";
            cell.style.background="red";
            counter=1;
        }
        else{
            cell.textContent = "X";
            cell.style.background="green";
            counter=0;
        }
        tokens=removeElement(getElementId(cell),tokens)
        if(counter==1){
          mapOneOrZero(getElementId(cell),counter,matrix)
        }
        else{
          mapOneOrZero(getElementId(cell),counter,matrix)
        }
    }
    else{
        console.log("Invalid")
    }
}
function restgame(){
  const announce=document.getElementById("nextturn");
  const tiles = document.querySelectorAll(".tiles");
  const player1scoretag= document.getElementById("player1ScoreID");
  const player2scoretag= document.getElementById("player2ScoreID");
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].style.backgroundColor = "white";
    tiles[i].textContent = "";
  }
  player1scoretag.textContent = 0;
  player2scoretag.textContent = 0;
  matrix=[[2,3,4],
            [2,3,4],
            [2,3,4]
          ]
  tokens=["1","2","3","4","5","6","7","8","9"];
  announce.textContent=Player1+" will start"
  playerOneScore=0
  playerTwoScore=0

}
function updateScore(){
  var player1=document.getElementById("player1ScoreID")
  var player2=document.getElementById("player2ScoreID")
  player1.innerText=playerOneScore
  player2.innerText=playerTwoScore
}
setInterval(updateScore, 100);

// Function calls
