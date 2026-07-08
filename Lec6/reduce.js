// let arr= [1,2,3,4,5,6,7,8,9,10]

// let total = arr.reduce((acc,curr) => {
//     return acc + curr;
// },0)

// console.log(total)


let shop = [
    {
        item : "jeens",
        price : 2999
    },
    {
        item : "jeens",
        price : 2999
    },
    {
        item : "jeens",
        price : 2999
    },
    {
        item : "jeens",
        price : 2999
    },
    {
        item : "jeens",
        price : 2999
    }
]

let totalSale = shop.reduce((acc,curr) => acc+curr.price, 0)
console.log(totalSale)