// let opt2 = document.createElement('option')
// opt2.innerHTML= "ah"
// companyNames.appendChild(opt2)
// let mobileModel = document.getElementById("mobileModel");


// let arr = [
//     {
//         name: "iphone",

//         i12: {
//             ram: "4",
//             rom: "8",
//             price: "123232 "

//         },
//         i13: {
//             ram: "4",
//             rom: "8",
//             price: "123232 "

//         },
//         i14: {
//             ram: "4",
//             rom: "8",
//             price: "123232 "

//         }

//     }

//     ,
    // // {
    // //     name: "samsung",

    // //     a12: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     },
    // //     a13: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     },
    // //     a14: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     }
    // // }
    // // ,
    // // {
    // //     name: "infinix",

    // //     in12: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     },
    // //     in13: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     },
    // //     in14: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     }
    // // }
    // // ,
    // // {
    // //     name: "xiaomi",

    // //     x12: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     },
    // //     x13: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     },
    // //     x14: {
    // //         ram: "4",
    // //         rom: "8",
    // //         price: "123232 "

    // //     }
    // }

// ]
// let arr3 = [
//     {
//         iphone: {
//         v14: {
//           ram: 4,
//           rom: 32,
//           price: 1000,
//         },
//         v14pro: {
//           ram: 8,
//           rom: 64,
//           price: 12800,
//         },
//         v13: {
//           ram: 2,
//           rom: 6,
//           price: 120,
//         },
//         v13pro: {
//           ram: 8,
//           rom: 64,
//           price: 12800,
//         },
//       },

//       x
    
//     }
// ]
// console.log(arr.length)

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     let opt = document.createElement("option");
//     opt.innerHTML = arr[i].name;
//     companyNames.appendChild(opt);
//   }
  


// arr.map(function(a){
//     console.log(a)
//     let opt2 = document.createElement("option");
//     opt2.innerHTML="za"
    // companyNames.appendChild(opt2);

// })

//  arr.map(function (e) {
//     console.log(e)

//     let opt = document.createElement('option');
//     companyNames.appendChild(opt);
//     opt.innerHTML = "za"

// })

// companyNames.onchange = function (event) {
//     let company = JSON.stringify(event.target.options[event.target.selectedIndex].value);
//     console.log(company)




//     arr.map((function (x,i) {
       
        
        
// var arr2 = { ...arr};
// console.log(Object.entries(arr2[1]))

        
    // }))


    // is k agy nh howa
    // let details = arr.filter(val => val.name == company)
    // console.log(details)


// }





// let check = arr.map((function(x,i){
//     let newwarr= arr[i].x14

//     console.log(newwarr)
// }))
// console.log(check)



// objArray = [ { name: "iphone",   v14: {ram: 4,rom: 32,price: 1000},} ,{ name: "samsung",   v13: {ram: 4,rom: 32,price: 1000},},{ name: "vivo",   v12: {ram: 4,rom: 32,price: 1000},}  
// ];
// let result = objArray.map(a => a.name);
// console.log(result)


// if (result == "iphone"){
//     let result2 = objArray.map(a => a.v14);
//     console.log(result2)
// }
// else if(result == "samsung"){
//     let result2 = objArray.map(a => a.v13);
//     console.log(result2)
// }
// else if(result == "Vivo"){
//     let result2 = objArray.map(a => a.v14);
//     console.log(result2)
// }
// else{
//     alert()
// }

objArray = [ { name: "iphone", Models:{
    v14:{
        ram:8,
        rom:64
    },
    v13:{
        ram:8,
        rom:64
    },
    v12:{
        ram:8,
        rom:64
    },
}},   { name: "samsung", Models:{
    v14:{
        ram:8,
        rom:64
    },
    v13:{
        ram:8,
        rom:64
    },
    v12:{
        ram:8,
        rom:64
    },
}},{ name: "vivo", Models:{
    v14:{
        ram:8,
        rom:64
    },
    v13:{
        ram:8,
        rom:64
    },
    v12:{
        ram:8,
        rom:64
    },
}}    
];

let result = objArray.map(a => a.name);
console.log(result)



if (result == "iphone"){
    let result2 = objArray.map(a => a.Models);
    console.log(result2)
    let option2 = document.createElement("option")
    option2.innerHTML = result2
    mobileModel.appendChild(option2)

}

 else if(result == "samsung"){
        let result2 = objArray.map(a => a.Models);
        console.log(result2)
    }
    else if(result == "vivo"){
            let result2 = objArray.map(a => a.Models);
            console.log(result2)
        }