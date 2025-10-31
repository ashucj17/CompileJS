// For in works on objects, array index

let myObject = {
    up: "uttar pradesh",
    mp: "madhya pradesh",
    ap: "andhra pradesh",
    del: "delhi",
    raj: "rajasthan"
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut notation of ${myObject[key]}`)
}

let myArray = [7,8,5,4,6,2,3,9]

for(const key in myArray){
    console.log(`${key} is the index of ${myArray[key]}`)
}