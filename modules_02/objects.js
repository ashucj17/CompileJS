// singleton: creating objects usingn singleton - Object.create

// Objects literals

let mySymbol = Symbol("Aplha1")


let jsUser = {
    name: 'Ashish',
    "employee grade": 'SDE3',
    [mySymbol]:"Alpha10",
    age: 18,
    location: 'Kanpur',
    email: 'ashish@redhat.com',
    isLoggedIn: true,
    lastVisited: ['Yesterday','Today','Tomorrow']
}

// console.log(jsUser.name);
// console.log(jsUser["employee grade"]) /* square brackets is used to access keys declared as string */
// console.log(typeof jsUser[mySymbol])

jsUser.email = "ashish.marcidees.com";
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email = "ashish.tatagrp.com";
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Good morning");
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name} Js Developer`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())