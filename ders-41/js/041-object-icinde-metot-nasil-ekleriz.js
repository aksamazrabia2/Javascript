//Object icinde metot nasil ekleriz


let user1={
    firsName: "Bilgin",
    lastName: "Uzman",
    score:[1,2,3,4],
    isActive:true,
    shortName:function(){return `${this.firsName[0].toUpperCase()} ${this.lastName}`}
};
console.log(user1)