const user  = {
    username: 'Ashish',
    price: 9999,

    welcomeMesssage: function(){
        console.log(`${this.username} welocme to website`)
        console.log(this)
    }
}

// user.welcomeMesssage()
// user.username = "Ashu"
// user.welcomeMesssage()

// function newMessage(){
//     let myName= 'Ashish'
//     console.log(this.myName)  //  cant read the property of undefined

// }

// newMessage()

const newMessage = () =>{
    let myName = 'Ashish'
    console.log(this).myName  //  cant read the property of undefined

}
// newMessage()

//  we have to used the curly braces while using the return keyword

let sum =(num1,num2) => {
    return num1 + num2
}

// console.log(sum(7,7))

let sub  = (num1,num2) => num1-num2;

// console.log(sub(9,3))

// to access the object inside the function we have to wrapup the object inside the breaces

let message = (username) =>({username: "ashish"})
// console.log(message())
