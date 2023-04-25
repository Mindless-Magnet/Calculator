
// getting the buttons
const num0 = document.querySelector('.num.zero');
const num1 = document.querySelector('.num.one');
const num2 = document.querySelector('.num.two');
const num3 = document.querySelector('.num.three');
const num4 = document.querySelector('.num.four');
const num5 = document.querySelector('.num.five');
const num6 = document.querySelector('.num.six');
const num7 = document.querySelector('.num.seven');
const num8 = document.querySelector('.num.eight');
const num9 = document.querySelector('.num.nine');

const decimal = document.querySelector('.num.decimal');

const equals = document.querySelector('.num.equals');
const plus = document.querySelector('.op.plus');
const minus = document.querySelector('.op.minus');
const divide = document.querySelector('.op.divide');
const modulus = document.querySelector('.op.modulus');
const multiply = document.querySelector('.op.multiply');

const clear = document.querySelector('.op.clear');


const result =  document.querySelector('.display');
result.value = " ";

//to change the display
function display(n){
    result.value+=n;
    result.innerHTML = result.value;
}


// event listeners for all buttons
num0.addEventListener('click', function() {
    display('0');
  });
  
  num1.addEventListener('click', function() {
    display('1');
  });
  
  num2.addEventListener('click', function() {
    display('2');
  });
  
  num3.addEventListener('click', function() {
    display('3');
  });
  
  num4.addEventListener('click', function() {
    display('4');
  });
  
  num5.addEventListener('click', function() {
    display('5');
  });
  
  num6.addEventListener('click', function() {
    display('6');
  });
  
  num7.addEventListener('click', function() {
    display('7');
  });
  
  num8.addEventListener('click', function() {
    display('8');
  });
  
  num9.addEventListener('click', function() {
    display('9');
  });
  
  // Add event listener for decimal button
  decimal.addEventListener('click', function() {
    display('.');
  });
  
  // Add event listener for equals button
  equals.addEventListener('click', function() {
    // Perform calculation and update display with result
    calculate();
  });
  
  // Add event listener for plus button
  plus.addEventListener('click', function() {
    display('+');
  });
  
  // Add event listener for minus button
  minus.addEventListener('click', function() {
    display('-');
  });
  
  // Add event listener for divide button
  divide.addEventListener('click', function() {
    display('/');
  });
  
  // Add event listener for modulus button
  modulus.addEventListener('click', function() {
    display('%');
  });
  
  // Add event listener for multiply button
  multiply.addEventListener('click', function() {
    display('*');
  });
  // event listener for clear button
 clear.addEventListener('click', function(){
    result.value=" ";
    result.innerHTML = result.value;
 })
  
 function calculate() {
    // Get the current display value
    var displayValue = result.value;

    // Perform calculation (example: evaluate the expression using eval())
    var calculatedResult = eval(displayValue);

    // Update the display with the result
    result.value = calculatedResult;
    result.innerHTML = calculatedResult;
}
