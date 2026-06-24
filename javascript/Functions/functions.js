//   Functions

//    blosck of code that perform a specefic task ,can be invoked when ever needed.


{
    //  function dedfinition
    function myFunction() {
        console.log("welcome to web Deveplopment");
        console.log("i am learning JavaScript");
    }

    //  function call
    myFunction();
    myFunction();
    myFunction();
}


{

    function oneFunction(msg) {   //paramete->input
        console.log(msg);
    }

    oneFunction("i love js");   // argument
}



{
    function sum(x, y) {
        s = x + y;     // x , y are local veriables this funtion ,there scopes is within this block only
        return s;
    }

    let val = sum(3, 4);
    console.log(val);

}


// Arrow function
//Compact way of writing function
{
    function sum(a, b) {
        return a + b;
    }


    const arrowSum = (a, b) => {
        console.log(a + b);
    }

}




{

    function multiply(a, b) {
        return a * b;
    };



    const arrowMul = (a, b) => {
        console.log(a * b);
    }

}



// Practice    
{
function countVowles(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
         char === "e" ||
          char === "i" || 
          char === "o" || 
          char === "u") {
            count++;
    
    }
}

return count;
}

};





//Practice

{
const countwow = (str) => {
let count=0;
 for (const char of str) {
        if (char === "a" ||
         char === "e" ||
          char === "i" || 
          char === "o" || 
          char === "u") {
            count++;
    
    }
}

return count;
}
}



   // ForEach Loop in Arrays
        // arr.forEach(callBackFunction)

        {

            let arr = [1,2,3,4,5,6];

            arr.forEach(function printVal(val){
                ///console.log(val);
            });
        }

        {
            let arr = [1,2,3,4,5,6];
            arr.forEach((val) =>{
                console.log(val);
            })
        }

        {
            let arr = ["Abbottabad","Nowshera","Gujrawala"];
            arr.forEach((val,idx,arr) =>{
                console.log(val.toUpperCase(),arr,idx);
            })
        }



        //Practice question
        {
            let nums = [2,3,4,5,6,7,8,9,];

            nums.forEach((num) =>{
                //console.log(num*num)
            })
        }


        // Some more array method 
              //Map
                    //create a new array with the result of some operation .the value its callback returns are used to form new arraay.

                    //arr.map(callBacKfnx(value,index,array))

                    {
                        let nums = [4,5,6,7];

                        nums.map((val) =>{
                    console.log(val);
                }
                )
                    }


                    {
                        let nums = [4,5,6,7];

                      let newArr=  nums.map((val) =>{
                    return val*val;
                }
                );
                console.log(newArr);
                    }


                    //  Filter
                       // create a new array of element that give true for a condition/filter. 

                       {
                        let nums = [44,56,66,77.79];

                      let evenArr=  nums.filter((val) =>{
                    return val %2 === 0;
                }
                );
                console.log(evenArr);
                    }


                    // Reduce 
                       // performs some operation and reduces the array to a single value ,it returns that single value.
                       

                       {
                        let arr = [1,2,3,4];
                     const output=   arr.reduce((res, curr) => {
                            return res+curr
                        });
console.log(output);
                       }
                       

                        {
                        let arr = [1,5,6,9,2,3,4];
                     const output=   arr.reduce((prev, curr) => {
                            return prev>curr ? prev : curr;
                        });
console.log(output);
                       }

                        {
                        let arr = [1,5,6,9,2,3,4];
                     const output=   arr.reduce((prev, curr) => {
                            return prev<curr ? prev : curr;
                        });
console.log(output);
                       }



                    //    pracrice questions

                    {
                        let marks = [77,88,91,93,55,88,98,99];
                        let toppers= marks.filter((val) =>{
                           return val>90 ;
                        });
                        console.log(toppers);
                    }

                      //    pracrice questions
                {
                      
                       let n= prompt("Enter a number  :  ");
                       let arr =[];
                       for(let i=1;i<=n;i++){
                        arr[i-1]=i;
                       }
                       console.log(arr);
                      let sum= arr.reduce((res,curr) =>{
                        return res + curr;

                       });
                       console.log("sum =",sum);
                      
                        let  factorail= arr.reduce((res,curr) =>{
                        return res * curr;

                       });
                       console.log("factorial =",factorail);
                    }