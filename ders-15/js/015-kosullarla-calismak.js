//*************Koşullarla Çalışmak*************
//https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Statements/if...else


let username=prompt("Kullanıcı Adınızı Giriniz:")
//eğer kullanıcı bilgisi varsa ekrana ismini yazdır
//eğer (usernmae.length>0){console.log(username)} değilse {console.log("bilgi yok")}
//if (usernmae.length>0){console.log(username)} else {console.log("bilgi yok")}

if(username.length >0 ){ //if kısmı her zaman true ise çalışır
    console.log(`Kullanıcı Bilginiz : ${username}`)
} else{

    console.log("bilgi yok")
}


var ogrVizeNot = 80; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 32; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}

