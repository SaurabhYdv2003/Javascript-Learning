//for of

const arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i)
    
}

const greeting= "Hello world"

for (const i of greeting) {
    // console.log(i)
    
}

//Maps // in map all values are unique

const map = new Map()
map.set("IN","India")
map.set("USA","United State America")
map.set("Uk","Unitaed nation")

// console.log(map);

for (const [key,value ]of map) {
    // console.log(key, value)
    
}


//for of loop not work in object
const myobj={
    'game1':'NFS',
    'game2':'Spiderman'
}

for (const [key,value] of myobj) {
    console.log(key,value)
    
}