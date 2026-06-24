//         DOM
         //  when a web page is loaded the browser create a Doccument object model (DOM) of the page.


         //   DOM Manipulation ;

         //      Selecting with Id
         //         document.getElementById("MyId")


         //    Selecting With class
         //         document.getElementByClassName("myClass")

         //    Selecting With Tag
         //         document.getElementByTagName("p")


         let heading =document.getElementById("heading");
         console.dir("heading");

         let myClass =document.getElementsByClassName("myClass");
         console.dir("myClass");
         console.log("myClass");

         let button =document.getElementById("myId");
         console.dir("button");
         console.log("button");

         let para =document.getElementsByTagName("p");
         console.dir("para");



         //  Query  Selector

              // document.querySelector("MyId / myClass / tag")
                             // returns first element

               let elements = document.querySelector("p");
               console.dir("elements") ;      
               
               

                let element = document.querySelector("button");
               console.dir("element") ;             



               //   document.querySelectorAll("myId/myClass/tag")              // returns a node list


               let AllElements = document.querySelectorAll("p");
               console.dir("AllElements") ;


               let AllElement = document.querySelectorAll(".myClass");
               console.dir("AllElement") ;






               //   Properties


                //  tagName  : returns tag for elemnt nodes

                //  innerText  : returns the text content of the     element and all its childern.

                //  innerHtml  : returns the plain text or html contents in the element

                //   textContengt ; returns textual content even for hidden elements






          let div =document.querySelector("div");
          console.dir("div"); 