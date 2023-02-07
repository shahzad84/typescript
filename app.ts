export{}

// class App{

//     test(){
//         console.log("i m good")
//     }
// }
// let a=new App();
// a.test()

// ******************************************

// types in typescript
// let a:number=12;
// console.log(a)

// *********************************************
// array is a collection of similar/nonsimilar data type in ts
// let a:string[]=["shahzad","good"]
// a.push("hii")
// console.log(a)

// *********************************************
// object is a key value pair
// interface= an interface is a programming syntax/structure that allow the computer to enforce certain properties on an object(class)
// interface usertyped{
//     name:string,
//     age:number,
//     address:string,
//     getName:()=>string
// }
// let users:usertyped={//we can define "any" at the place of usertyped
//     name:"shahzad",
//     age:30,
//     address:"usa",
//     getName:function(){
//         return "hii"
//     }
// }
// users.name="good"
// console.log(users.getName())
// console.log(users)

// *********************************************
// union types describe a value that can be one of several types.
// let data:string|number|boolean="shahzad"
// data=43
// console.log(data)

// *********************************************
// functions:function is a various group of statements that perform tasks together.
// function calculate(a:number,b?:number):number{
//     return b?a+b:a;
// }
// console.log(calculate(100,12))

// *********************************************
// class
// class App{
//     name:string="shahzad";
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// let a1=new App("shahzad")
// console.log(a1.getName())-

// *********************************************
// inheritance
// class go{
//     name:string;
//     setName(name){
//         this.name=name
//     }
// }
// class child extends go{
//     getName(){
//         return this.name;
//     }
// }
// let c1=new child();
// c1.setName("shahzad")
// console.log(c1.getName())

// *********************************************
// namespace it is ts specific way to organize the code.

// namespace UserUnit {
//   export class users {
//     getName() {
//       return "shahzad";
//     }
//   }
// }
// let a = new UserUnit.users();
// console.log(a.getName());

// *********************************************
// module any file containing a top level import or export is considered a module.
// import slogin from "./student"
// import tlogin from "./teacher"

// let teacher = new tlogin()
// console.log(teacher.data)
// let student =new slogin()
// console.log(student.data)

// *********************************************
// Generics: can take all type of inputs
// function users<T>(data:T):T
// {
//     return data
// }
// console.log(users("hii"))

// *********************************************
// enum: the value is match within the limit like mon-sun
// enum days{
//     mon,tue,wed,thru,fri,sat,sun
// }

// function whichday(day:days){
//     return day
// }
// console.log(whichday(days.mon))

// *********************************************
// symbol
// class demo{
//     demo1(){
//         return "cool"
//     }
// }
// let d1=new demo();
// console.log(d1.demo1())

// *********************************************
// tsconfig file
//type tsc init in terminal

// *********************************************
// type inference

// *********************************************
// tuple
// let role:[string,string,number]=["shahzad","good",34];
// role.push("hii")

// *********************************************
// literal when we assign value instead of type is known as literal

// *********************************************
// type alias
// type cool=string|number
// let a:cool=10
// let b:cool="hii"

// *********************************************
// function type
// function cool(a,b):number{
//     return a+b
// }
// cool(12,2)
// console.log(cool(12,2))

// *********************************************
// undefined ,never type in ts
