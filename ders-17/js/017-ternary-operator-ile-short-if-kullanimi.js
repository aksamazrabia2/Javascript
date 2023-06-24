//**************ternary operator ile short if kullanimi*****************

//eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz

let userName=prompt("Kulanici Bilginizi Yaziniz")
let info=document.querySelector("#info")

//ternary kullanimi:
//kosul ? dogruysa : yanlissa

//{userName.length>0 ? userName :"Kullanici Bilginiz Bulunamadi :(
info.innerHTML=`${userName ? userName :"Kullanici Bilginiz Bulunamadi:("}`

var money=40;
canBuy.innerHTML=`${money<17 ? "Satın alamazsın.." : "Satın alabilirsin.."}`