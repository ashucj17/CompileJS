let data = [1,2,3,4,5,6,7,8,9,0]

let filtered = data.filter((num)=>{
    return num > 4
})
// console.log(filtered)

// achieving the result with forEach

let myData = [];

data.forEach((value)=>{
    if(value>4){
        myData.push(value)
    }
})
// console.log(myData)

let heroes = [
  { name: "Batman", power: "Intelligence", universe: "DC" },
  { name: "Superman", power: "Super Strength", universe: "DC" },
  { name: "Ironman", power: "Advanced Tech Suit", universe: "Marvel" },
  { name: "Spider-Man", power: "Spider Sense", universe: "Marvel" },
  { name: "Flash", power: "Super Speed", universe: "DC" },
  { name: "Thor", power: "God of Thunder", universe: "Marvel" },
  { name: "Wonder Woman", power: "Super Strength", universe: "DC" },
  { name: "Black Panther", power: "Enhanced Agility", universe: "Marvel" },
  { name: "Hulk", power: "Super Strength", universe: "Marvel" }
];

// let myOperations = heroes.filter((data)=>{
//     return data.universe === 'DC'
// })
let selected = []
let myOperations = heroes.forEach((value)=> {
    if(value.power === "Super Strength"){
        selected.push(value)
    }
} )

// console.log(selected)

let myHeros = heroes.filter((value)=>{
    return value.power === "Super Strength" && value.universe ==="Marvel"
})

console.log(myHeros)