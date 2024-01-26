
var counter=0;

var tokens=["1","2","3","4","5","6","7","8","9"];


const clickableDivs = document.querySelectorAll(".cell"); 


function move(cell){
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
   console.log(this.id)
}