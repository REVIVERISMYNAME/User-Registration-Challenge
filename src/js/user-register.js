/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

    // Get reference to all elements in register tab
    var registerTab = document.getElementsByClassName("register");

    // Get reference to all elements in userList tab
    var userTabs = document.getElementsByClassName("users");

  // Switch Tab 

  /* --- Nav references --- */

    // code here...

  // Switch to only Register User Tab
  var registerUser = document.getElementById("users-tab-button");
  registerUser.addEventListener("click", registerUserBtn );

    function registerUserBtn(){
        console.log(" -- Register User -- button pressed")

        userTabs[0].style.display = "none";
        registerTab[0].style.display = "block";
      
    }



  // Switch to only View User List Tab
  var viewUserList = document.getElementById("register-tab-button");
  viewUserList.addEventListener("click", viewUserListBtn);
  
    function viewUserListBtn(){
        console.log(" -- View User List -- button pressed");
    
        userTabs[0].style.display = "block";
        registerTab[0].style.display = "none";

   }





/* --- Form field references --- */

    // code here...

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("myPassword").value;
       

    console.log(firstName);
    console.log(lastName);
    console.log(userName);
    console.log(email);
    console.log(passWord);


/* --- Table list reference --- */

    // code here...
    var tableList = document.getElementById("user-list");

    var registerBtn = document.getElementById("register-submit");
    registerBtn.addEventListener("click", createUser);

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...

  function createUser(){
    console.log("-- Register -- Button pressed")



    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("myPassword").value;
    

    var userNameInput =
    document.createTextNode(userName)
    var firstNameInput = 
    document.createTextNode(firstName)
    var lastNameInput = 
    document.createTextNode(lastName) 
    var emailInput = 
    document.createTextNode(email)
    var passWordInput = 
    document.createTextNode(passWord)        



    var userName_span = document.createElement("span")
    userName_span.appendChild(userNameInput);
    
    var firstName_span = document.createElement("span")
    firstName_span.appendChild(firstNameInput);
    
    var lastName_span = document.createElement("span")
    lastName_span.appendChild(lastNameInput);
    
    var email_span = document.createElement("span")
    email_span.appendChild(emailInput);
    
    var passWord_span = document.createElement("span")
    passWord_span.appendChild(passWordInput);
    


    var newUser = [x=0, userName_span, firstName_span, lastName_span, email_span, passWord_span];
    
    let newLi = document.createElement("li")
        newLi.appendChild(newUser[1]);
        newLi.appendChild(newUser[2]);
        newLi.appendChild(newUser[3]);
        newLi.appendChild(newUser[4]);
        newLi.appendChild(newUser[5]);
    
    
        var tableList = document.getElementById("user-list");
        tableList.appendChild(newLi);

        // Switch to only View User List Tab
        userTabs[0].style.display = "block";
        registerTab[0].style.display = "none";

    
        console.log("Added : " + firstName);
        console.log("Added : " + lastName);
        console.log("Added : " + userName);
        console.log("Added : " + email);
        console.log("Added : " + passWord);
    
  }        

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */
