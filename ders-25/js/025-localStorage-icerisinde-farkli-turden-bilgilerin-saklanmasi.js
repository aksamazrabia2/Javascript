//Local Storage Islemleri:

let user={userName: "rabiaksamaz",isActive:true}
console.log(user)
localStorage.setItem('userInfo',JSON.stringify(user))

let userInfo=localStorage.getItem('userInfo')//bilgiyi al
userInfo=JSON.parse(userInfı)
console.log(userInfo)

