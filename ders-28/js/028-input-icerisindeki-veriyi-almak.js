//FORM SUBMIT

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)


function formSubmit(event){
    event.preventDefault()// default işlemi engelledik.
    console.log("İşlem gerçekleşti") 
    let scoreInputDOM=document.querySelector('#score')
    console.log(scoreInputDOM.value)
}