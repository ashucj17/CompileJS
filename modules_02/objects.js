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
console.log(typeof jsUser[mySymbol])