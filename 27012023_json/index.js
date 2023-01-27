// (async () => {
//     try {
//         const res = await fetch('animals.json');
//         const json = await res.json();
//         console.log(json)
//     } catch (error) {
//         console.log(error)
//     }

// })()


// fetch('animals.json')
// .then(res=>{
//     console.log(res)
//     return res.json()
// })
// .then(json=>{
//     console.log(json)
// })
// .catch(err=>{
//     console.log(err)
// })


// const myObject = {
//     "firstName": "Sarah",
//     'lastName': 'Conor',
//     age: 24
// }

// console.log(myObject)
// const jsonStringified = JSON.stringify(myObject)
// console.log(jsonStringified)
// const jsonObj = JSON.parse(jsonStringified)
// console.log('jsonObj: ',jsonObj)


// const users = [
//     {
//         "fistName": "Sarah",
//         "lastName": "Conor",
//         "age": 20,
//         "isLegal": true,
//         "address": {
//             "street": "Afner",
//             "city": "tel-aviv",
//             "number": 23
//         }
//     },
//     {
//         "fistName": "Benjamin",
//         "lastName": "Franklin",
//         "age": 20,
//         "friends": [
//             {
//                 "name": "Rusvilt",
//                 "lastName": "Teodor"
//             },
//             {
//                 "name": "Rusvilt",
//                 "lastName": "Teodor"
//             }
//         ]
//     }
// ]

// console.log('users: ',users)