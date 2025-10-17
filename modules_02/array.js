let myArr = [5,9,7,6,2]
// console.log(myArr)
// console.log(myArr[3])

let myArr_2  = new Array("Ashu","Suchit", "Suchit")
// console.log(myArr_2)
// console.log(myArr_2.length)


/* Array Method */

// myArr.push(8)

// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)

/* Questionable property */

// console.log(myArr.includes(2))
// console.log(myArr)
// console.log(myArr.indexOf(2))
// console.log(myArr.includes(4))


/* join method returns a new string by concaenating all the elements, by default it uses the the comma or with the given seperator  */

let newArray = myArr.join()
// console.log(myArr)
// console.log(newArray)
// console.log(myArr_2.join('_'))

/* ssclice and splice */

console.log("Slice",myArr.slice(1,3))
console.log("OG", myArr)
console.log('Splice',myArr.splice(1,4))
console.log("After Splice", myArr)







