let today = new Date()
// console.log(today.toString())
// console.log(today.toISOString())
// console.log(today.toUTCString())
// console.log(today.toDateString())
// console.log(today.toLocaleString())
// console.log(typeof today);

let createdDate = new Date(2025,10,25)
// console.log(createdDate.toString())
// console.log(createdDate.toLocaleString())


let customDate = new Date(2025,12,17);
// console.log(customDate.toString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(createdDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let now = new Date();
// console.log(now.toISOString()) /* Output:2025-10-13T12:37:46.401Z : where T is the seperator */
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getFullYear())