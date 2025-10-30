// for (let i = 1; i <= 10; i++) {
//   console.log(`\nThe table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i*j)
        if(i===5){
        console.log(`${i} decteted`)
        continue;
    }
    }
    
}