//       EVENTS  IN  JAVASCRIPT
  //      the change in the state of an object is known is event
  //      events are fired to notify code of "interresting changes" that   may affect code execution.



  //  >   mouse events (cick , double click etc)
  //  >   keyboard events (keypress ,keyup ,keydown)
  //  >   form events (submit etc )
  //  >    print event and many more

{
  let btn1 = document.querySelector("#btn1");
  btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
  }
}

{
    let div = document.querySelector("div");
    div.onmouseover = () => {
        console.log("you are inside div");
    }
}




//   Even Object
//          it is  a special object that has details about the event.
//          all event handles have access to the event objects properties and methods.


//   node.event = (e) => {
//    // handle here     }
{
let btn3 = document.querySelector("#btn3");
btn3.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY)
}
}



//     Event Listeners 
//     node.addEventListener(event,callback)
//     node.removeEventListener(event,callback)
// note  :  the cllback reference should be same to remove.

{
    let btn4 = document.querySelector("#btn4");
    btn4.addEventListener("click" , (evt) => {
        console.log("btn4 was clicked");
        console.log(evt);
        console.log(evt.type);
    })

     btn4.addEventListener("click" , (evt) => {
        console.log("btn4 was clicked -hander2");
        console.log(evt);
        console.log(evt.type);
    })

     btn3.addEventListener("click" , () => {
        console.log("btn4 was clicked - handler3");
        
    })

     btn4.addEventListener("click" , (evt) => {
        console.log("btn4 was clicked -handler4");
        console.log(evt);
    
    })

{

    const handler3 = () =>{
        console.log("btn3 was clicked - handler3");
    
    };
        btn3.addEventListener("click ",handler3);

    btn3.removeEventListener("click", handler3);
}
}



   //      Toggle   Button

   let modeBtn = document.querySelector("#mode");
   let currentmood = "light";

   modeBtn.addEventListener("click" ,(e) => {
    if(currentmood === "light"){
        currentmood = "Dark"
        document.querySelector("body").style.backgroundColor = "black"
    }else{
        currentmood = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }
   });
