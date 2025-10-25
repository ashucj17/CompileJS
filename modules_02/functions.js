// function myFestivals(){
//     const family = "Everyone"
//     console.log(`Happy diwali ${family}`)
// }

// myFestivals()

// function greating(to){
//     return `Good evening ${to}`
// }

// console.log(greating("Ashish"))

// function sum(num1,num2){
//     console.log(num1 + num2)
// }

// let result = sum(5,9)

// console.log("Result", result) /* it will display undefined as the function in not returning anything */

function sum(num1,num2){
    return num1 + num2
}

let result = sum(5,9)

// console.log("Result", result) /* here the function returns addition of num1 and num2  */


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,600,900))


let userDetails= {
    userName: "Ashish",
    salary: 1250000
}

function empDetails(rendomUser){
    console.log(`the employee name is ${rendomUser.userName} and the salary is ${rendomUser.salary}`)
}

empDetails(userDetails)

// empDetails({
//     userName: "Rahul",
//     salary:1080000
// })

let price = [100,300,500,400]

function cart(bucket){
    return `the pirce of the product is ${bucket}`
}

// console.log(cart(price[3]))

function message(){
    return "hello"
    // console.log("Hello")
}
console.log("message:",message())