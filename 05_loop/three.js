// For each

const coding = ["js","python","Cpp","Ruby","Java"]

// coding.forEach( function (item){
//     console.log(item)

// })

coding.forEach((item)=>{
    // console.log(item)

})

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCooding= [
    {
        languageNmae:"Javascript",
        languageFileNmae:"js"

    },
    {
        languageNmae:"Java",
        languageFileNmae:"java"

    },
    {
        languageNmae:"python",
        languageFileNmae:"py"

    }
]

myCooding.forEach((item)=>{
    console.log(item.languageFileNmae)
})