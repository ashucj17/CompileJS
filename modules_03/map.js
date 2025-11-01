// Map(): It returns a new array wthout modifying the original array. the callback must return a value otherwise it will return undefined

let myarray = [1,2,3,4,5,6,7,8,9,10]

// const mappedArray = myarray.map((num)=> num + 10)

// method chaining

const mappedArray = myarray
                    .map((num) => num * 10)
                    .map((num) => num / 2)
                    // .filter((num) => num >= 15 && num <=35)
                    .filter((num) => num >= 5)

console.log(mappedArray)
// console.log(myarray)
