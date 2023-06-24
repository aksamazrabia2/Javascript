//**********Çoklu Koşullarla Çalışmak***************

let userName=prompt("Kullanıcı Adınız:")
let age=prompt("Yaşınız:")

let info=document.querySelector("#info")

/*if(userName && age >=18){
    console.log("ehliyet alabilirsiniz.")
} else if(!userName){

    console.log("Kullanici Adiniz Yok!!")
}else if(!(age >=18)){
    console.log("Yas bilginiz yok veya 18 yasindan kücüksünüz")
}*/

if(userName && age >=18){
    info.innerHTML="ehliyet alabilirsiniz."
} else if(!userName){
    info.innerHTML="Kullanici Adiniz Yok!!"
}else if(!(age >=18)){
    info.innerHTML="Yas bilginiz yok veya 18 yasindan kücüksünüz"
}