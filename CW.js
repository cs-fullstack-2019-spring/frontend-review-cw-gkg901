



// GIMMIE DAT BUTTON

var query = document.querySelector("button");




// USERS INPUT STORAGE

var userArray = [];


// ALL IN ONE function
query.onclick = function(){

    userInput = "";
    while (userInput !== "n")
    {
        userInput = prompt("Do you want to quit?");
        userArray.unshift(userInput);
        if (userInput === "n")
        {
            console.log(userArray.length);
        }
    }
};
