const form=document.querySelector('form')
//this use casecase will give you empty
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height=='' || height<0 || isNaN(height)){
        results.innerHTML= `please give a valid height ${height}`
    }

    if(weight=='' || weight<0 || isNaN(weight)){
        results.innerHTML= `please give a valid height ${weight}`
    }

    else{
        const bmi=(weight/((height*height)/10000).toFixed(2))
        // show the result

        results.innerHTML=`<span>${bmi}</span>`
    }



})