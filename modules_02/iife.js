// Immediately Invoked Function Experssion IIFE- its protects the function from the global scope variables, used to create the private scope
//  Also need to put a semicolen at the end to terminate the execution

(function myLove(){
    console.log("We all need a person to love") // named iife as the function have a name
})();

( (name) =>{
    console.log(`DB connected connected to ${name}`) // simple iife
})("Ashish")