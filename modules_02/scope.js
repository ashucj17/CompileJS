/* var is a global scope variable where as the let and const have the block scope */

var a= 10;
let b= 20;
const c= 30;

if(1){
    var a= -10;
let b= -20;
const c= -30;
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    let username = "ashish";
    function two(){
        let website = 'linkedin'
        // console.log(username)
    }

    two()
    // console.log(website)
}

one()


function addOne(num){
    if(true){
        return num + 1
    }
}
console.log(addOne(5))

// function expresson

let addTwo = function(num){
    if(true){
        return num +2
    }
}
console.log(addTwo(6))