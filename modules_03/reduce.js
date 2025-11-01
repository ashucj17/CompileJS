//  reduce method is used to reduce or club all the values of an arrya, it returns a single value.
// it takes three arguments: 1: accumulator which holds the runnning total, 2: current value 3: initial value

let myvalues = [5,10,15,20,25]

let reducedValue = myvalues.reduce((accumulator,current) =>{
    // console.log(`${accumulator}, ${current}`)
    return accumulator + current
},0 )

// console.log(reducedValue)

let mycart = [
    {
    product: "EarPods",
    price: 1999
    },
    {
    product: "mobile cover",
    price: 499
    },
    {
    product: "screen guard",
    price: 300
    },
    {
    product: "charger",
    price: 500
    },

]

let totalPrice = mycart.reduce((cart,item) => (cart  + item.price),0 )
console.log(totalPrice)