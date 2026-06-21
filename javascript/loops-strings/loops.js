// Loops in Java Script
// loops are used to execute a piece of code again anad again

// 1   For LOOP


{
for (let count=1 ; count<=100;count++) {
    console.log("software updaters");
}
  console.log("loop has ended");
}


// example   Calculate sum of 1 to n using for loop

{
let sum = 0;
let n = 7;
for (let i =1 ; i<=7;i++) {
    sum = sum +i;
}
console.log("sum = ",sum)
 console.log("loop has ended");
}

// exapme   print 1 to 10
{

for (let i=1;i<=10;i++) {
    console.log("i = ",i)
    
}
console.log("loop has ended");
}


// infinite loop ;  loop that never end


//              while loop

{
    let b =1;
    while (b<=7){
        console.log("b =",b);
        b++;
    }
}

{
    let i =1;
    while (i<=7){
        console.log("software updaters");
        i++;
    }
}


//         Do while  LOOP
{
    let b =20;
    do {
        console.log("b =",b);
        b++;
    } while(b<=10);
}



{
    let i =1;
    do {
        console.log("1 =",1);
        i++;
    } while(i<=5);
}


//      for-of loop

{
    let str ="software updaters";
     for ( let i of str) {
        console.log("i =",i);
     }
}


{
    let str ="software upddaters";
    let size =0;
     for ( let i of str) {
        console.log("i =",i);
        size++;
     }
     console.log("str size =",size);
}

// for-in loop

{
    let student ={
        name:"naveed khan",
        age:23,
        cgpa:3.20,
        isPass:true

    };
    for(let key in student){
        console.log("key =",key, "value=",student[key]);
    }
}



// practice quesstions

{
    
    for (let num=0;num<=100;num++) {
    if (num%2 === 0) {
        console.log("num=",num);
    } 
    }
            
}


// practice question

{
    let gameNum =25
   let userNum= prompt("Guess the game number");

   while(userNum != gameNum){
     userNum= prompt("You Enter wrong number .Guess Again : ")
   }
   console.log("Congratulations, you eneter the correct numcer");
}