//Object ve Array Destructuring Nasıl Kullanılır
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//Object Destructuring:


let settings={
    userName: "loremIpsum",
    password:"BadPassword",
    isActive:false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

//obje içindeki bilgilerin tek seferde cikarilmasi

//let userName=settings.userName
//console.log(userName)

//rename && destructuring
let {userName: user, password, isActive, ip:serverIp, serverName}=settings

console.log(user, password, isActive, serverIp , serverName)
console.log(settings)
console.log(user)

//obje içindeki bazı bilgilerin cikarilmasi
let{userName: userName2, password: password2, isActive:isActive2, ...newSettins}=settings

//eğer değişken ismi dah önce tanımlandıysa:
//let{userName, password, isActive, ...newSettins}=settings

console.log(userName2,password2,isActive2,newSettins)

//objenin destructuring ile kopyalanmasi


//HATALI !!! settings in içi de değişti
//let settings2= settings
//settings2.userName="Degisen Bilgi"
//console.log("setttings",settings)
// console.log("settings2",settings2)


//DOĞRUSU
let settings2={...settings}
settings2.userName="Degisen Bilgi"
console.log("setttings",settings)
console.log("settings2",settings2)

let score=[100, 200, 300, 400]

let [score1,score2, ...otherScore]=score
console.log(score1,score2,otherScore)


//object kopyalama ile aynı ... let settings2={...settings}
let copyOfScore=[...score]
console.log(copyOfScore)