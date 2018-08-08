

var button1 = document.querySelector('.number_1');
var button2 = document.querySelector('.number_2');
var button3 = document.querySelector('.number_3');
var button4 = document.querySelector('.number_4');
var button5 = document.querySelector('.number_5');
var button6 = document.querySelector('.number_6');
var button7 = document.querySelector('.number_7');
var button8 = document.querySelector('.number_8');
var button9 = document.querySelector('.number_9');
var button0 = document.querySelector('.number_0');

var addition = document.querySelector('.addition');
var subtraction = document.querySelector('.subtraction');
var multiplication = document.querySelector('.multiplication');
var division = document.querySelector('.division');
var period = document.querySelector('.period');
var equal = document.querySelector('.equal');
var clear = document.querySelector('.clear_button');
var equal = document.querySelector('.equal');

button1.addEventListener("click", function(){
    document.querySelector('.display').innerHTML += "1";
    });
button2.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "2";
   });
button3.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "3";
   });
button4.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "4";
   });
button5.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "5";
   });
button6.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "6";
   });
button7.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "7";
   });
button8.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "8";
   });
button9.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "9";
   });
button0.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "0";
   });
addition.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "+";
   });
subtraction.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "-";
   });
multiplication.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "*";
   });
division.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += "/";
   });
period.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML += ".";
   });  
clear.addEventListener('click', function addInput(){
    document.querySelector('.display').innerHTML = "";
   });  
equal.addEventListener('click', function addInput(){
    var evaluation= eval(document.querySelector('.display').innerHTML)
    document.querySelector('.display').innerHTML =   evaluation
   });
