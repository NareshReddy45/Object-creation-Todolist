let buttonElement = document.getElementById("button");
let inputname = document.getElementById("name");
let inputemail = document.getElementById("email");
let bodyElement = document.body;
let divmainElement  = document.getElementById("main");



buttonElement.addEventListener('click', function(event) {


    event.preventDefault();
     
    let name = inputname.value;
    let email = inputemail.value;

    

    let divElement = document.createElement("div");
    let h2Element = document.createElement("h2");
    h2Element.textContent = "Response";
    divElement.appendChild(h2Element);
    divmainElement.appendChild(divElement);

    let paragraph = document.createElement("pre");
    divElement.appendChild(paragraph);



    
    let objectcreation = {
        "name" : name,
        "email" : email,
    }

    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(objectcreation)
      };

    
      
      fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then(function(response) {
          return response.json();
        })
        .then(function(jsonData) {
          let output = JSON.stringify(jsonData,null,2);
          paragraph.textContent = output;
        });


    

    // console.log(objectcreation);

    inputname.value = "";
    inputemail.value = "";

    



});