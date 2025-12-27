var storedItem = localStorage.getItem("storedItem");
var storedItem2 = localStorage.getItem("storedItem2");
let cpt1= document.getElementById("cpt1");

let number = Number(storedItem);
    cpt1.textContent = number;
let cpt2= document.getElementById("cpt2");
let number2 = Number(storedItem2);
    cpt2.textContent = number2;
function Incr2(){
    number2 = number2 + 1;
    localStorage.setItem("storedItem2", number2);
    cpt2.textContent = number2;
}
function Incr1(){

    number = number+1;
    localStorage.setItem("storedItem", number);
    cpt1.textContent = number;

}
function Get(){

    localStorage.getItem("storedItem");
}