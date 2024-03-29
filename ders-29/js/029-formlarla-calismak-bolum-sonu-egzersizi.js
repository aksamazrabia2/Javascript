//FORMLARLA ÇALIŞMAK: Bölüm Sonu Egzersizi

/*
1:Formu Seç
2:Input Bilgisini UL İçerisine Ekle
3:Form İçindeki bilgiyi sıfırla
4:Eğer forma bilgi girilmezse kullanıcıyı uyar

*/

let userFormDOM=document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler) 
const alertDOM=document.querySelector('#alert')
const alertFunction=(title,message,className="warning")=>`

<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`
function formHandler(event){

    event.preventDefault()
    const USER_NAME=document.querySelector("#username")
    const SCORE=document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)//gönderdikten sonra sıfırladık
        USER_NAME.value=""
        SCORE.value=""
    }else{
        alertDOM.innerHTML=alertFunction(
            "Başlık Bilgisi",
            "Eksik Bilgi Girdiniz",
            "success")
    }
   
}

let userListDOM=document.querySelector('#userList')
const addItem=(userName,score)=>{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`
        ${userName}
        <span class="badge bg-primary rounded-pill"> ${score}</span>
       `
    liDOM.classList.add('list-group-item','d-flex','justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
} 