// singleton

//object literals

const mysym= Symbol("key1")

const JsUser= {
    name:"Saurabh",
    "full name":"Saurabh Yadav",
    [mysym]:"mykey1",
    age:20,
    location:"Jaipur",
    email:"saurabh@729gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser [mysym])


JsUser.email= "Saurabh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="Saurabh@microsoft.com"
// console.log(JsUser)

JsUser.gretting= function(){
    console.log("Hello Js user")
}

console.log(JsUser.gretting())

JsUser.gretting2= function(){
    console.log(`Hello Js user ,${this.name} ` )
}

console.log(JsUser.gretting2())