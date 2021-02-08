function validate(){
    var username=document.getElementById("username").value;
     var password=document.getElementById("password").value;

     if(username.length<3 || username.length>20){
        alert("no of characters of the username must be between 3 and 20");
        return false;
     }
      if(password.length<8)
     {
         alert("password must have at leaast 8 chars");
     }
}