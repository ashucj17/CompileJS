//  for of: it works with array, strigs, maps, NodeLists

let myArray = [4,5,6,2,9,7,8,1]

for (const index of myArray ) {
    // console.log(index)
}

// Maps are not iterable
const map = new Map();

map.set('IN' , "India");
map.set('AUS' , "Australiya");
map.set('WI' , "West Indeis");

for(const [key, values] of map){
    // console.log(key, ":", values)
}
//  Object is not iterable with for of loop
let myObj ={
    m1: "jan",
    m2: 'Feb'
}

for (const [key,vlaue] of myObj) {
    // console.log(key,":", vlaue)
}