// Commenets In Js

// for single line comment
/*for multiple line comments*/


// Operators in Js
/* used to perform some operation on data

Arithmetic Operaators
+   addition
-   minus
*   multiply
/   divide
%   Moddules
a^b  Exponentiation  a^2 = 2*2

        unary Operators
   increament   ++         a++  a=a+1
   decrement    --          a--  a=a-1
*/

// Addition
let a = 5;
let b = 7;

// if we want to show a and b value in console
console.log("a=",a ,"& b=",b);

console.log("a+b =",a+b)

console.log("a%b=",a%b)

{
    let a =5;
    let b =16;
    let c = a+b;

    console.log("a=",a,"&b=",b,)
console.log("a+b=",c);
}


// Minus

let x = 11 ;
let y = 4 ;
 console.log("x-y =",x-y);

 {
    let z=33;
    let r =3;
    let p = z-r;
    console.log("z-r =",p)

 }

 // Multiply

let w = 11 ;
let t = 4 ;
 console.log("w*t=",w*t);

 {
    let l=33;
    let q =3;
    let s = l*q;
    console.log("l*q =",s)

 }


// Dividde

let f= 25;
let k=5;
console.log("f/k =",f/k)


{
    let u = 88;
    let j =10;
    let v =u/j;
    console.log("u/j =",u/j)
}

// Exponentiation 

let h=5;
let g=2;
console.log("a ** b =",a**b)//5^2


// Unary operators

let e=5;
let m=2;

console.log("e =",e, "&m =",m);
// a=a+1;   or write 
a++;
console.log("a =",a);



let o=5;
let n=2;

console.log("o =",o, "&n =",n);
 a=a-1;   
//  or write a--;
console.log("a =",a);


// Assignments Operators

/*


=      Asssign operator
+=
-=
*=
%=
**=

*/

{
    let a = 5 ;
    let b = 2;

    a += 4 ;
    console.log("a =",a);
}




{
    let a = 5 ;
    let b = 2;

    a -= 4 ;
    console.log("a =",a);
}



{
    let a = 5 ;
    let b = 3;

    a *= 4 ;
    console.log("a =",a);
}


{
    let a = 5 ;
    let b = 3;

    a /= 4 ;
    console.log("a =",a);
}


{
    let a = 5 ;
    let b = 3;

    a %= 4 ;
    console.log("a =",a);
}


{
    let a = 5 ;
    let b = 3;

    a **= 4 ;
    console.log("a =",a);

}

// Comparison operators
/*

==    Equal to 
===   Equal to & type
!=    Not  Equal To 
!==   Not Equal to & type   
>      greater 
>=      grater and equal
<        smaaler
<=      smaller and equal

*/

// Equal to
{
    let a = 5 ;
    let b = 3;

    console.log("5==2",a==b);

}

{
    let a = 5 ;
    let b = 5;

    console.log("5 == 5",a==b);

}

// not equal


{
    let a = 5 ;
    let b = 3;

    console.log("5!=2",a!=b);

}

{
    let a = 5 ;
    let b = 5;

    console.log("5 != 5",a!=b);

}

// equal to and type

{
    let a = 5 ;
    let b = "5";

    console.log("5===2",a!=b);

}

{
    let a = 5 ;
    let b = 5;

    console.log("5 === 5",a===b);

}

// > greater

{
    let a = 5 ;
    let b = 3;

    console.log("a > b",a  > b);

}

{
    let a = 5 ;
    let b = 9;

    console.log("a > b",a > b);

}



// Logical Operators 

/*

Logical AND &&
Logical OR  ||
Logical !

*/

{
    let a = 6 ;
    let b = 5;

    let cond1 = a > b ;
    let cond2 = a === 6 ;
    console.log("cond1 && cond2 =",cond1 && cond2);

}

{
    let a = 6 ;
    let b = 5;

    let cond1 = a < b ;
    let cond2 = a === 6 ;
    console.log("cond1 && cond2 =",cond1 && cond2);

}

// Logical OR ||

{
    let a = 6 ;
    let b = 5;

    let cond1 = a > b ;
    let cond2 = a === 6 ;
    console.log("cond1 || cond2 =",cond1 || cond2);

}

{
    let a = 6 ;
    let b = 5;

    let cond1 = a < b ;
    let cond2 = a === 5 ;
    console.log("cond1 ||  cond2 =",cond1 || cond2);

}

// Logical Not !

{
    let a = 6 ;
    let b = 5;

    console.log("!(6<5) =", !(a===6));}