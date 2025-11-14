/* ${}  in JS is call tamplet litteral interpolation  or strinng interpolation. It is used inside the tamlate litterals (``) back ticks  for the expression and variables. Mostly used for concatinating string */

let firstName = 'Ashish'
let lastName = 'Agnihotri'

// let fullName = firstName + lastName //old way

// console.log(firstName + lastName) // old way
// console.log(`hello ${firstName} ${lastName}`)  // using templet litterals


/* While delcaring the element using new keyword an object is created */

let state = "Uttar Pradesh"
let city = new String('Kanpur');

// console.log(state) // permitive string
// console.log(city) // string object (wrapper object)

// console.log(city.toUpperCase())
// console.log(state.toUpperCase())


// console.log(city.length)
// console.log(city.indexOf('a'))
// console.log(state.indexOf('a'))

// console.log(state.concat( city))
// console.log(city.includes('p'))


let anotherState = state.substring(0,4)
// console.log(anotherState)

// console.log(state.slice(-11,6))


let myURL = 'https://ashish%20agnihotri.com'
// console.log(myURL)
// console.log(myURL.replace('%20','-'))

let gameName  = 'ashu_cj_17'

// console.log(gameName.split('_'));


let avatr = '   tobi_cyclops  '
// console.log(avatr)
// console.log(avatr.trim())

let dataBase = [
    { id: 1, name: "John", age: 25 },
  { id: 2, name: "Sarah", age: 30 },
  { id: 3, name: "Mike", age: 28 }
]

// dataBase.forEach(function(users){
//     console.log(users.name)
// })

dataBase.map((users)=>{
    console.log(users.age<=29)
})
