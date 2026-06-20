// Conditional Statement 

// To implement some condition in the code 

// 1        IF statment 
{
let age =24;

if (age>=18) {
    console.log(" you can vote");
}

}

{
    let age =16;
if (age<18) {
    console.log(" you can not vote");
}
}


{
    let mode ="dark";
    let color ;
     if (mode==="dark") {
        color ="black";
     }

     if (mode==="light ") {
        color ="white";
     }

     console.log(color);
}



// If Else Statment

{
    let mode ="dark";
    let color ;
    if (mode==="dark") {
        color ="black";
    } else {
        color="white"
    }
    console.log(color);
}

{
    let age = 24;

    if (age>=18) {
        console.log("you can vote")
    } else {
        console.log("you can not vote");
    }
}


{
    let num = 26

    if (num%2===0) {
        console.log(num,"is even")
    } else {
        console.log(num,"is odd")
    }
}


// Else If statment

{
    let age =13

    if (age < 18) {
        console.log("junior");
    } else if(age>60) {
        console.log("senior");
    } else{
        console.log("middle");
    }
    
}


{
    let age =23
    if (age <18) {
        console.log("school student");
    } else if (age>60) {
        console.log("teacher");
    } else {
        console.log("university student");
    }
}