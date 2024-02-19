// array

const myArr= [1,1,2,3,4,5]

const myHeros= ["shaktiman","Hanuman","ironMan"]

const myArr2= new Array(1,2,3,4,5,6)
// console.log(myArr2[3])

//Array method
// myArr.push(6)
// myArr.push(7)
// myArr.pop() //remove last element
// myArr.unshift(8) //Add the velue to the starting index
// myArr.shift() //Remove

// console.log(myArr.includes(9)) //check the avilble or not 
// console.log(myArr.indexOf(3))

const newArr= myArr.join()
// console.log(myArr)
// console.log(newArr)

// console.log(myArr)

//slice, splice

console.log("A",myArr);

const myn1= myArr.slice(1,3);
console.log("B",myArr);
console.log(myn1)

const myn2= myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2)


