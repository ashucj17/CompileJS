// var: we can redeclare and ressign the variable
// var a = 10;
// var a = 20;
// console.log(a)

// let: we can only reassign the variable
// let a = 10;
//  a = 20;
//  console.log(a)

// const: Used for constant values
// let a = 10;
// console.log(a)

/* scope: var have the functional scope and let, const have the block scope */

// function varScope(){
//     if(true){
//         var a = 10  
//     }
//     console.log(a)  /* here the output will be 10 as the var have the functional scope  */
// }
// varScope()

function varScope(){
    if(true){
        let a = 10 
        console.log(a);  /* output: 10 as the print statement is used within the block. Same in case of const */
    }
    console.log(a)  /* here, it will through the error as the let have the block scope and the print statement is used out of the block. It will be same in case of const   */
}
varScope()