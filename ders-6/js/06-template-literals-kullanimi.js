//************Template Literals Kullanımı*****************
//https://developer.mozilla.org/en-Us/docs/Web/Javascript/Reference/Template_literals


let username="rabia"
const DOMAIN="kodluyoruz.org"


let email=username + "@" + DOMAIN
console.log("Merhaba ",username, " sitemize hoşgeldin", "mail adresin: ",email)

let info=`
Merhaba ${username} sitemize hoşgeldin.. 
mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2+3)*10} TL
günün saat bilgisi :${new Date().getHours()}

kısa isminiz:${username[0]}.

`

console.log(info)