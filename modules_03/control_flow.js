// if else

// let isLoggedIn = true;

// if(!isLoggedIn){
//     console.log("User Logdded In")
// }
// else{
//     console.log("Invalid user")
// }

// let joinedFromGoogle = true
// let joinedFromEmail  = true

// if(joinedFromEmail || joinedFromGoogle){
//     console.log("User have joined")
// }

// Switch case is used to compares values using === equality

let myscore = 852;

switch (true){
    case (myscore < 500): console.log("Candidate not clear the round");
    break;

    case (myscore >= 500 && myscore < 650): console.log("Candidate cleared the round with B grade")
    break;

    case (myscore >= 650 && myscore < 850): console.log("Candidate cleared the round with A grade ")
    break;

    case (myscore > 850): console.log("Candidate cleared the round with A+ grade ")
    break;

    default: console.log("please check your marks")
    break;
}

// Null coalision operator(??) it checks on null and undefined

let val1 = 2 ?? 5;
let val2 = null ?? 5
let val3 = undefined ?? 5

console.log(val1)
console.log(val2)
console.log(val3)

// terniary operator (?:): condition ? true : false;

let icetea = 150;
icetea <= 80 ? console.log("Basic price") : console.log("Speciality")