//   Functions

    //    blosck of code that perform a specefic task ,can be invoked when ever needed.


{
    //  function dedfinition
    function myFunction(){
        console.log("welcome to web Deveplopment");
        console.log("i am learning JavaScript");
    }

    //  function call
    myFunction();
     myFunction();
      myFunction();
}


{

      function oneFunction(msg){   //paramete->input
        console.log(msg);
      }

      oneFunction("i love js");   // argument
    }



{
         function sum(x,y) {   
        s = x+y ;     // x , y are local veriables this funtion ,there scopes is within this block only
        return s ;
         }
        
let val=sum(3,4);
console.log(val);

        }


        // Arrow function
          //Compact way of writing function
        {
        function sum(a,b){
            return a+b;
        }
        
    
    const arrowSum =(a,b) =>{
            console.log(a+b);
        }

    }




{
    
function multiply(a,b){
    return a*b;
};

    

    const arrowMul=(a,b) =>{
    console.log(a*b);
    }
      
}



// Practice    

function countVowles(str) {
    for (const char of str){
        console,log(char);
    }
}