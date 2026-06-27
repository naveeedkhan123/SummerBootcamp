//    Fetch Api
       //  APPLICATION PROGRAMMING INTERFACE
  //   the fetch api provides an interface for fetching (sending and receving ) resourcses.
  //   it uses requests and response objects.
  //   the fetch () method is used to fetch a resourse (data).
  

        //   let promise = fetch(url,[options])

        const imgElement = document.querySelector("img");
        const URL = "https://dog.ceo/api/breeds/image/random";

     const getCats = async () => {
        console.log("getting data......... ")
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            imgElement.src = data.message;
            imgElement.alt = "Fetched image";
        } catch (error) {
            console.error("Error fetching image:", error);
            imgElement.src = "https://via.placeholder.com/300x200?text=Image+Unavailable";
            imgElement.alt = "Image unavailable";
        }
     }
getCats();
     
     




     //  Understanding Terms

     //  AJAX  : is Asynchronous JS and XMl.
     //  AJSON : JavaScript object Notaion .

     // Json() method ; returns a second promise that resolve with the result of parsing the response body text as JSON.(input is JSON , output is JS object).













     //  Requests and Response
           // HTTP verbs
           // response stastus code

           //      HTTP response headers also conatain details about the response such as content type HTTP statsus code etc.