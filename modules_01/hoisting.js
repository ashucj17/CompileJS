// var hoisting
// console.log(a)
var a =10;
// console.log(a)

// let hoisting 
// let b = 15;
// console.log(b);

// function hoisting

try{
}catch(e){
    console.log("functional hoisting")
}
function wishes(){
    console.log("Mission Tandav")
}
wishes();

// function expression hoisting

try{
    month()
}catch(e){
    console.log(e)
}

let month = function(){
    console.log("July")
}