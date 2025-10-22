const myShop = new Object()

// console.log(myShop)

myShop.id = 110102
myShop.userName = 'ashu25cj'
myShop.contact = 8080906030

// console.log(myShop);

const userDetail =  {
    userId: 741258,
    userName: "agni17",
    passsword: 741852963
}

const empBasicDetail = {
    empName: 'Ashish',
    empMobNo: 7418523690,
}

const empData = Object.assign({},userDetail, empBasicDetail)
// console.log(empData);


const empAddress= {
    fullAddress:{
        hounseNo: "8A",
        street: 'Satbari Road',
        area: {
            block: 'Kidwai Nagar',
            city: "Kanpur",
            State: "Uttar Pradesh"
        }
    }
}


// console.log(empAddress.fullAddress.area)
// console.log(Object.keys(empAddress))
// console.log(Object.values(empAddress))
// console.log(Object.keys(userDetail)) /* returns the data in arrary  */
// console.log(Object.values(userDetail))
console.log(Object.entries(empAddress))
console.log(empAddress.hasOwnProperty('fullAddress'))
