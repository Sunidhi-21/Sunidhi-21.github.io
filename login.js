function validate(){
    var username=document.getElementById("username").value;
     var password=document.getElementById("password").value;

     if(username.length<3){
        alert("username must have at least 3 chars");
        return false;
     }
      if(password.length<8)
     {
         alert("password must have at leaast 8 chars");
     }
}