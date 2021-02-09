function validate(){
    var username=document.getElementById("username").value;
     var password=document.getElementById("password").value;

     if(username.length<3 || username.length>20){
         document.getElementById("lbluser").innerHTML="Invalid! Number of characters must be between 3 and 20";
     }else{
         document.getElementById("lbluser").innerHTML="";
     }

     if(password.length<8)
     {
        document.getElementById("lblpass").innerHTML="Invalid! Password must have minimum 8 characters";
     }else{
        document.getElementById("lblpass").innerHTML="";
     }
}