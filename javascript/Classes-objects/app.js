//    Prototypes  In JavaScript

    //  a java script object is an entity having state and behaviour (properties and method).
    //  js object have a special property called prototype.
    //  we can set prototype using __proto__


 const student ={
    fullName : "Naveed khan",
    marks : 97,

    printMarks : function (){
        console.log("marks =", this.marks);
    }
 }   ;





const employee = {
    calcTax : function () {
        console.log("tax rate is 10%") ;
    }
};

const naveed = {
    salary : 60000,

};

const khan = {
    salary : 60000,

};

const raees = {
    salary : 60000,

};

const lol= {
    salary : 60000,

};

naveed.__proto__ = employee ;
khan.__proto__ = employee ;
raees.__proto__ = employee ;
lol.__proto__ = employee ;




//   classes in JavaScript 
  //       class is a program code template for creating objects .
  //       those objects will have some sate (variables) and some behaviour (function ) inside it.

  // i.e
            //  class MyClass {
            //  constructor () {...}
            //  myMethod ()  {...}
            //      }


            // let myObj = new Myclass();

  
            
 class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new object");
         this.brand = brand;
         this.mileage=mileage;
    }
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }

    
 }     
 
 let fortuner = new ToyotaCar("fortuner",12);
console.log(fortuner);
 let vesel = new ToyotaCar("fortuner",14);
 console.log(vesel)






 //   Inheritance is passing down properties and methods from parent class to child class.

 //    class parent{
 //    }
 //     class Child extends parent {
 //      };
 




 class Parent {
    hello () {
        console.log("hello");
    }
 }

 class child extends Parent{}

 let obj=new child();





{
 class person {
    eat () {
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
 };


 class enginnner extends person {
    work () {
        console.log("solve problems");
    }
 }

 let naveedObj = new enginnner();

}


 //     Super Keyword
   //   the super keyword is used to call the constructor of its parent class to access the parents properties and methods .
         
        //  super(args)     // calls parents constructor
        //   super.parentMethod(args)


        
 class person {

    constructor(name) {
        this.species = "homo sapiens";
        this.name=name;
    }
    eat () {
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
 };


 class enginnner extends person {
    constructor (name){
        super(name);
    }
    work () {
        console.log("solve problems");
    }
 }

 let khanObj = new enginnner("Naveed khan");





 //  Practice  Questions 

let DATA = "secret website information";

 class user {
    constructor (name,email) {
        this.name=name;
        this.email=email;
    }

    viewData() {
        console.log("data =", DATA) ;
    }
 };

class Admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA ="some new value "
    }
}


 let student1 = new user ("naveed khan","abcd@email.com");
  let student2 = new user ("negative" , "sdc@email.com");

  let teacher1 = new user ("maryam","maryam@gmail.com");

let admin1 = new Admin("admin","admin@gmail.com");




//   Error Handling
//  try-catch
//  try{
//  ..normal code
//  }catch (err){..handling error}


let a = 5;
let b = 10;
console.log("a =",a);
console.log("b =",b);

try{
    console.log("a+b =",a+c); // error
}catch(err){
console.log(err);
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);