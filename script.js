// math functions

function add(a, b){
    return a+b;
};

function subtract(a, b){
    return a-b;
};

function multiply(a, b){
    return a*b;
};

function divide(a, b){
    return a/b;
};

// variables for arithmetic expression

var a=0;
var b=0;
var o='';


// operate function

function operate(a, b, o){
    if (o === '+'){
        add(a,b);
    };
    if (o === '-'){
        subtract(a,b);
    };
    if (o === '*'){
        multiply(a,b);
    };
    if (o === '/'){
        divide(a,b);
    };
}

// getting the buttons
const num0 = document.querySelector('.0');
const num1 = document.querySelector('.1');
const num2 = document.querySelector('.2');
const num3 = document.querySelector('.3');
const num4 = document.querySelector('.4');
const num5 = document.querySelector('.5');
const num6 = document.querySelector('.6');
const num7 = document.querySelector('.7');
const num8 = document.querySelector('.8');
const num9 = document.querySelector('.9');

const decimal = document.querySelector('.decimal');

const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const modulus = document.querySelector('.modulus');
const multiply = document.querySelector('.multiply');

