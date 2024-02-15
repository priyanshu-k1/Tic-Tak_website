const clickableDivs = document.querySelectorAll(".tiles"); 
var tokens=["1","2","3","4","5","6","7","8","9"];
var counter=0;


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
    }
    else{
        console.log("Invalid")
    }
    

}