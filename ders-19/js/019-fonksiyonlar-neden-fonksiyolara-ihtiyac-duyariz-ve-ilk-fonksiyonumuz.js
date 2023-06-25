// ****************İlk Fonksiyonumuzu Tanımlamak********************


function helloWorld(){
    console.log("Hello World")
}
function hello(){
    console.log("Merhaba")
    helloWorld()
}

//Hata alabiliriz.. userName age vs bulamaz
/*function userCheck(){
    if(userName && age >=18){
        info.innerHTML="ehliyet alabilirsiniz."
    } else if(!userName){
        info.innerHTML="Kullanici Adiniz Yok!!"
    }else if(!(age >=18)){
        info.innerHTML="Yas bilginiz yok veya 18 yasindan kücüksünüz"
    }
}*/
hello()//Çalıştır