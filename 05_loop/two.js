// For in

const myobj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myobj) {
    console.log(`${key} shortcut for ${myobj[key]}`)
   
}