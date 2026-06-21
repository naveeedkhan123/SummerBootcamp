//    Strings in JavaScript
    //  Strings is sequence of characters used to represent text
{

    let str = "Software Upadters";
    let str2 = 'hello';

    console.log(str[14])

}


// Template Literals in Js
        // A way to have embedded expresssion in strings
            //    'this is a template literal'


{
let specialString =`this is a template literal `;
console.log(specialString);
}


// string interpolation
// to create strings by doing subsstitution of placeholders

{
let specialString =`this is a template literal ${1+2+4}`;
console.log(specialString);
}

let obj = {
    item :"pen",
    price:10,

};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


// Escape Characters
    //    \n use for next next line
    //      \t     use for space betwwen characters

{
    let str =("apna\tcollege")
    console.log(str.length);
}

    // strings method in Js
    //    there are build-in funtions to manipulate a string


// 1     str.toUpperCase()

{
    let str3 = "software updaters";
    let newStr = str3.toUpperCase();
    console.log(str3);
    console.log(newStr);
}


// 2     str.toLowerCase()

{
    let str4 = "SOFTWARE UPDATERS";
    let newStr = str4.toLowerCase();
    console.log(str4);
    console.log(newStr);
}


// 3      Str.trim()  
    //   remove white spaces

    {
        let str5 = "     Apna College Js         ";
        console.log(str5.trim());
    }

    // 4    str.slice(start,end?)  // returns part of string

    {
        let str6 = "01234567";
        console.log(str6.slice(2,6));
    }
    
    // 5     str.concat(str2)     // joins str2 with str1

    {
        let str11 ="Software";
        let str22 ="Updaters";

        let result = str11.concat(str22);
        console.log(result);
    }

    // 6  str.replace(searchVal,NewVal)

    {
        let str33 ="hello";
        console.log(str33.replace("ello","ey"));
    }

    // 7        str.charA(idx)   

    {
        let str0 = "i love web development";
        console.log(str0.charAt (5));
    }


    // Practice question

    {
      let fullName =  prompt("Enter your full name without spaces") ;
      let username="@" + fullName + fullName.length;
      console.log(username);
    }