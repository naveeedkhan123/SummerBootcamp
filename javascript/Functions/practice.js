          //       Functions in Js

          {
            function greet() {
                console.log("hello world");
            }
            greet();
          }

          // function with parameters

        {
            function greet(name){
                console.log("hello"+name);
            }
             greet("Naveed Khan");
        }

        // function Returning Value 

        {
            function add(a,b){
                return a+b;

            }
            let result = add(77,3);
            console.log(result);
        }



        {
            function square(num){
                return num*num;
            }
            console.log(square(5));
        }

        // Even or ODD

    {
        function checkEven(num){
            if(num%2 === 0) {
                return "Even"
            }else {
                return "Odd";
        }
        
    }
}





{
    function sayHi() {
        console.log("Hi Everyone !");
    }
    sayHi();
}




{
function multiply(a,b) {
    return a*b;
}
let result = multiply(9,9);
console.log(result);
}

{
    function isPositive(num) {
        if(num>0){
            return "positive";
    }
     else{
        return "Negative...."
    }

   }
    let number = isPositive(-6);
    console.log(`number is: ${number}`);



}




{
    function findMax(a,b) {
        return a<b? a : b ;
    }
    console.log(findMax(6,7));
}

{
    const fahrenheitToCelsius = (F)=>{
        C = (F - 32) * 5/9
        console.log(C);

    }

    fahrenheitToCelsius(68)
}





//Normal function
{
function add(a, b) {
    return a + b;
}

console.log(add(4, 6));
}


//Arrow Funtion

{
    const add = (a, b) => {
    return a + b;
};

console.log(add(4, 6));
}



//single parameter Arrow function

{
    const square = num => {
    return num * num;
};

console.log(square(5));
}



// One line arrow function
{
    const square = num => num*num;
    console.log(square(9));
}



// find age after 10 years
{
    const futureAge = age => age + 10;

console.log(futureAge(23));
}


// even or odd
{
    const isEven = num => {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
};

console.log(isEven(8));
}

//Largest Number

{
    const max = (a, b) => {
    if (a > b) {
        return a;
    }else
    return b;
};

console.log(max(10, 15));
}





{
    const greeet = (ali) =>{
        console.log("hello ali");
    }
    greeet();
}


{
const cube = num => {
    return num * num * num;
};

console.log(cube(3));
}



{
const isAdult = age => {
    if(age>=18){
        return "You are adult";
    }else{
        return "You are minor";
    }
}
console.log(isAdult(23));
}


{
    const calculator = (a,b) =>{
        return a+b;
    }
    console.log(calculator(10,5,"+"))
}



{
    const countVowels = str => {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("Pakistan")); // 3
console.log(countVowels("Hello"));    // 2
console.log(countVowels("JAVASCRIPT"));// 3
}