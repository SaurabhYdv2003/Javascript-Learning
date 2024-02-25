//reduce

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and curval :${currval}`)
//     return acc+currval
// },0)

const myTotal= myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemNmae:'ja',
        price:'999'
    },
    {
        itemNmae:'python',
        price:'199'
    },
    {
        itemNmae:'java',
        price:'2999'
    },
    {
        itemNmae:'App dev',
        price:'3999'
    },
    {
        itemNmae:'Data science',
        price:'4999'
    }
]
const totalPrice= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice)