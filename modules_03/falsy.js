// Falsy Values

false, 0, -0,'',null, undefined, NaN, BigInt, 0n

// truthy value

// '0', 'false', ' ', [], {}, function(){}


const myDB  = []

if(myDB.length === 0){
    console.log("DDB is empty")
}
else{
    console.log("You have entered in the database")
}

const myObj = {}

if(Object.keys(myObj).length===0){
    console.log("Empty Object")
}
else{
    console.log("Object have the keys and values")
}