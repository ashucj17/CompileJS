// let surName = "Agnihotri"
// console.log(global.surName) /* output will be undefined in node environment */

// let surName = "Agnihotri"
// console.log(window.surName) /* output will be blank and script will show <value unavailable> */

var surName = "Agnihotri"
console.log(window.surName)  /* var will work as an window object but let and const wll NOT attach the window property  */