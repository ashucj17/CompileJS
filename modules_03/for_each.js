let coding = ['cpp','c#','python','javascript','react']

// For each with normal function
coding.forEach(function(item){
    // console.log(item)
})

// with arrow function
// coding.forEach((item)=>console.log(item))

// with another function as a parameter
function printMe(item){
    // console.log(item)
}
// coding.forEach(printMe)

// callback function in for each can take array, index and value as an parameter
// coding.forEach((value, index, array)=>console.log(value, index, array))

// we can use this loop on nested array objects

let heroes = [
  { name: "Batman", power: "Intelligence", city: "Gotham" },
  { name: "Superman", power: "Strength", city: "Metropolis" },
  { name: "Flash", power: "Speed", city: "Central City" }
];

heroes.forEach((item)=>{
    // console.log(`The hero name is ${item.name}, his power is ${item.power} and he is from ${item.city}`)
})

// for each loop only returns from the callback, not from the outer function or loop

let codingLang = coding.forEach((item)=>{
    return item
})

console.log(codingLang)