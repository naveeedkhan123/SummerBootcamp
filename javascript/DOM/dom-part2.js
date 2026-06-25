//     D O M
  //  attributes  :     
                 //   getAttribute(attr,value)
                 //   setAttribute(attr,value)

    //style
               //  node.style
               
            {
      let div = document.querySelector("div")   ;
      console.log("div")   ;   

    let id =  div.getAttribute("id");
    console.log("id");



    let para=document.querySelector("p");
    console.log(para.setAttribute("class","newClass"));

    // div.style.backgroundColor ="green";
    // div.style.fontSize="38px";
    // div.innerText ="Hello";
}





    //       INSERT  ELEMENTS
                     //   let el = document.createElement("div")

    //   node.append(el)        //adds at the end of node(inside)
    //   node.prepend(el)       //adds at the start of node (inside)
    //   node.before(el)        //adds before the node (outside)
    //   node.after(el)         //adds after the node (outside)


    //      DELETE element
    //   node.remove()          //remove the node
{

    let newButton = document.createElement("button");
    newButton.innerText ="click"
    console.log("newButton")


let div = document.querySelector("div");
    div.append(newButton);

}


{
     let subButton = document.createElement("button");
    subButton.innerText ="Subscribe Now"
    console.log("subButton")

    let div = document.querySelector("div");
    div.prepend(subButton);
}

{
    let startButton = document.createElement("button");
    startButton.innerText ="start Now"
    console.log("startButton")

    let div = document.querySelector("div");
    div.before(startButton);
}


{
let endtButton = document.createElement("button");
    endtButton.innerText ="End"
    console.log("endtButton")

    let div = document.querySelector("div");
    div.after(endtButton);
}

{

    let newHeading = document.createElement("h1");
    newHeading.innerHTML = "<i>Hello Everyone </i>";

    document.querySelector("body").prepend(newHeading);
    
}


{
    let para = document.querySelector("p");
    para.remove();
}




{
let helloButton =document.createElement("Button");
helloButton.innerText="Click Me";

helloButton.style.color="white";
helloButton.style.backgroundColor = "red";
console.log("helloButton");
document.querySelector("body").prepend(helloButton);



}


    let para =document.querySelector("p");
