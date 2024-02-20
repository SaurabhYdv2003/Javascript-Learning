function sayMyName(){
    console.log("Saurabh")
}

// sayMyName();

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }


function addTwoNumber(num1,num2){
    // let result=(num1+num2);
    return num1+num2;
}

const result=addTwoNumber(5,4);
// console.log("Resut:",result)

function loginUserMessage(username){
    return `${username} just logged in `
}

// console.log(loginUserMessage("saurabh"))
// console.log(loginUserMessage())

// rest operator(...num1)
function CalculateCarPrice(...num1){
    return num1;

}
// console.log(CalculateCarPrice(200,400,500))

const user={
    username:'Saurabh',
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray= [200,400,500,300]
function returnsecondValue(getArray){
    return getArray[1]
}

// console.log(returnsecondValue(myNewArray))
// console.log(returnsecondValue([100,200,300,400]))