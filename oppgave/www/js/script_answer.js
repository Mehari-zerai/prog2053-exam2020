//This function will be called when the page is load.
//it fetches all the users in the database base and creat list.
function getAllUsers() {
    fetch(`api/fetchUsers.php`, {
    }).then(res=>res.json())
    .then(data=>{  
        var userContainer = document.getElementById("users"); 

        data.forEach(x=> {
            
        //creates new elements and appends it to userContainer element
         var newUserElement = document.createElement('div');
        newUserElement.setAttribute("id", x.uid)
        newUserElement.innerText = x.uname + "\n" + x.firstName + " " + x.lastName + "\n";
        userContainer.appendChild(newUserElement);
            
        //make the div clickable
        newUserElement.onclick = function() {getUser(newUserElement.id)};
        });
    });
}

//This function will be called when user selected 
//it fetches all info about one specific user
//and puts the info in a HTML form
//Param event is the user ID
function getUser(event){
    var user = document.getElementById("user");
    user.style.display = "block";
    fetch("api/fetchUser.php?id=" + event.toString(), {
  
    }).then(res=>res.json())
    .then(data=>{

        //puts info about user inside the HTML form
        document.getElementById("lastName").value = data.lastName;
        document.getElementById("uid").value = event;
        document.getElementById("firstName").value = data.firstName;
        document.getElementById("uname").value = data.uname;

    });
}