'use strict';

const productId = 1234;

console.log(productId);

//showMessage(mesaje); respect the minus and mayus

// var don`t show errors always use let

// need know the operators precedence

// negative numbers in the brackets

// `` == alt gr } important

// + symbol is required for concat strings

//toUpperCase mayus =/= toLowerCase minus

// toString convert numbers or others to string  =/= Usually parseFloat is used to convert strings to numbers.

// saved = true  but saved = !saved is fliped = false

// undefined var is equals to not initialized =/= null eliminated the value 

// an object is made up of multiple elements, such as first and last name symbol is a property of an object

// if is used to declare conditions if  == yes / else if  == yes no / else == no

//  false, 0, empty strngs, nul, undefined, NaN  // everything not falsy, true, o.number, "0" as string

// ()toFixed define number of decimals always return a string add (+) in the start return a number 

// == converts type === respects type

// (condition) ? true statement : false statement

// declaring a variable in a block will make it only available in it

// for (let i = 0; i < array.length; i++) watch out for infinite loops like for (let i = 0; i < 5; i--)

// let i = 4; while ( i  > 0) { console.log(i);  i--;} this print 4,3,2,1 because i--

// let i = 4;do { console.log(i); i--;} while (i > 0); la condición está garantizada una vez

//function name() { console.log("action")} the call name();

// two forms declaration o expresions 

// let myfunction = function logFunction <--debug () { console.log("hey")} the call is logFunction();

//defining a variable in the function allows adding a value when calling it ej. showMessage('its a mess')

// function returnsfunc(value){ let code = value * 42} console.log(returnsfunc(2)); if missing return undefined

// when you declare a variable inside a function it disappears when finished

/*const button = document.getElementById('see-review');
button.addEventListener('click', function(){
    console.log('click');
});

this count the clicks in this button*/

/*
const button = document.getElementById('see-review');
button.addEventListener('click', function(){

    const review = document.getElementById('review');
    
    if(review.classList.contains('d-none)){
        review.classList.remove('d-none');
        botton.textContent = 'CLOSE REVIEW'; 
    }
    else
    {
        review.classList.add('d-none');
        botton.textContent = 'SEE REVIEW'; 
    }
});

display the element with the id review and change the content of the button*/

// arrays can be initialized on creation, it is good practice to use the same type inside the array

//accesing an array let values = ['a','b','c']; console.log(values[0]);with this notation of brackets you can change any value of the array

//push() add a value to the array --/-- pop() remove the last item 
//shift() moves the entire array an obtain the value of the array deleted of this --/-- unshift( ) add the elements in the firsts places
//slice() create an array from a portion of the original create a copy of the original
//splice() insert or delet elements in somewhere in the array not just at the beginning or at the end 
//splice(index, num.deleted, add )

//filter() create a new array with a function that checks element by element
