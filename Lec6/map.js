let arr= [1,2,3,4,5,6,7,8,9,10]

// let updatedArr = arr.map((val)=>{
//     return val + 10
// }).filter((val) =>{
//     return val>15
// })

// console.log(arr);
// console.log(updatedArr);


let newArr = arr.filter((val) =>{
    return val % 2 == 0
}).map(val => val+10)

console.log(newArr)