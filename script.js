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

