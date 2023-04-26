
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

const back = document.querySelector('.op.back');
const answer = document.querySelector('.op.Ans');
const result =  document.querySelector('.display');
result.value = " ";

//to track decimal point use
var decimaluse = false;


//to change the display
function display(n){
  if(n === '.'){
    decimaluse = true;
    decimal.disabled = true;
  }
  else if(n === '+' || n === '-' || n === '*' || n === '/' || n === '%')
  {
    decimal.disabled = false;
    decimaluse = false;
  }
  if(newline === true)
  {
    result.value = " ";
    result.innerHTML = result.value;
    newline = false;
  }
    result.value+=n;
    result.innerHTML = result.value;
}

// function to round off the numbers
function roundNumber(number, decimalPlaces) {
  var multiplier = Math.pow(10, decimalPlaces);
  return Math.round(number * multiplier) / multiplier;
}


// for clicks
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

 //answer button (stores previous answer)
 answer.addEventListener('click',function(){
  result.value+=ans;
  result.innerHTML = result.value;
 } )

 // backspace button
 back.addEventListener('click', function(){
  result.value = (result.value).slice(0, -1);
  result.innerHTML = result.value;
 })

  
var ans = 0;
var newline = false;

 function calculate() {
    // Get the current display value
    var displayValue = result.value;
  
    // Perform calculation (example: evaluate the expression using eval())
    var calculatedResult = eval(displayValue);
    ans = calculatedResult;
    calculatedResult = roundNumber(calculatedResult, 2);
    // Update the display with the result
    result.value = calculatedResult;
    result.innerHTML = calculatedResult;
    newline = true;
}


//for keyboard

window.addEventListener('keydown', function(e){
  if(e.key === "0")
  {display('0')}
  else if(e.key === "1")
  {display('1')}
  else if(e.key === "2")
  {display('2')}
  else if(e.key === "3")
  {display('3')}
  else if(e.key === "4")
  {display('4')}
  else if(e.key === "5")
  {display('5')}
  else if(e.key === "6")
  {display('6')}
  else if(e.key === "7")
  {display('7')}
  else if(e.key === "8")
  {display('8')}
  else if(e.key === "9")
  {display('9')}
  else if(e.key === ".")
  {
    if(decimaluse === false){
    display('.')
    }
  }
  else if(e.key === "+")
  {display('+')}
  else if(e.key === "-")
  {display('-')}
  else if(e.key === "*")
  {display('*')}
  else if(e.key === "/")
  {display('/')}
  else if(e.key === "%")
  {display('%')}
  else if(e.key === "Enter")
  {calculate()}
  else if(e.key === "Backspace")
  {result.value = (result.value).slice(0, -1);
  result.innerHTML = result.value;}
  else if(e.key === "c")
  {result.value=" ";
  result.innerHTML = result.value;}
  else if(e.key === "a")
  {result.value+=ans;
  result.innerHTML = result.value;}
  
})