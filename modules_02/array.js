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

// let newArray = myArr.join()
// console.log(myArr)
// console.log(newArray)
// console.log(myArr_2.join('_'))

/* ssclice and splice */

// console.log("Slice",myArr.slice(1,3))
// console.log("OG", myArr)
// console.log('Splice',myArr.splice(1,4))
// console.log("After Splice", myArr)



let empName  = ['ashish','rahul','ajay']
let newEmpName = ['karan','mayak','rohan']


// console.log(empName.push(newEmpName))
// console.log(empName)

let fullStreanth = empName.concat(newEmpName)
// console.log(fullStreanth)

let totalEmployees = [...empName, ...newEmpName]
// console.log(totalEmployees)

/* the .push() method add the array at the end in an sigle index and returns the legth of the array.
Where as the concat() method and spread operator [...]  used to emrge the array and returns the new array */


// console.log(Array.isArray("Ashish")) /* isArray() method is used to check whether  the given data is an array or not  */
// console.log(Array.from('Ashish'))  /* from() method is used to cconvert the data into an array */
// console.log(Array.from({name: 'Ashish'})) /* here it gives the blank object, We have to specify the key or value */


let id = 101
let name = 'Ashish'
let designation = 'Frontend Developer'

let myDetails = Array.of(id, name, designation)
// console.log(myDetails)


let nestedArray = [4,3,6,[7,9,5,[10,70],2,0,[7,9]],10,33]
// console.log(nestedArray.flat(1))
// console.log(nestedArray.flat(2))
// console.log(nestedArray.flat(3))

let mydata = [7,8,2,13,15,9,4,6]

// mydata.shift()
// console.log(mydata.slice(0,4))
// console.log(mydata.splice(0,1))
console.log(mydata.sort())

/* the sort methord converts the array method to string hence the 13 comes before 2 becouse the 1 is smaller then 2 */

//  to sort numarically

console.log("asending order",mydata.sort((a,b)=>a-b))  // ascending order
console.log("Decending order",mydata.sort((a,b)=>b-a))  // descending order

