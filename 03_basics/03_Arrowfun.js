const user={
    username:"Saurabh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username= "saurabh"
//     console.log(this.username);
// }

// one()

// const two= ()=>{
//     let username= "saurabh"
//     console.log(this)
// }
// two()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>  num1+num2

const addTwo=(num1,num2)=> ({username:"saurabh"})



console.log(addTwo(5,4))