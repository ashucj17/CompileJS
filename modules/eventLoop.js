// Event loop example

console.log("Start")
setTimeout(()=>{
    console.log("SetTimeOut Callback..!")
},200)

Promise.resolve().then(()=>
    console.log("Promise Callback..!")
)
console.log("End")


/* Call Stack Example */

function f1(){
    console.log("f1")
}
function f2(){
    f1()
    console.log("f2")
}
f2()