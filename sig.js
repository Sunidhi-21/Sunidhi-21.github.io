function validate(){
    var email=document.getElementById("email").value;
    var email1 = document.getElementById("email1").value;
    var username=document.getElementById("username").value;
   
     var password=document.getElementById("password").value;
     var password1=document.getElementById("password1").value;

     var phone=document.getElementById("phone").value;

     var regx =/^[0-9]\d{9}$/;
     var regx1 =/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

     if(regx1.test(email)){
         document.getElementById("lblemail").innerHTML="";
     }else{
        document.getElementById("lblemail").innerHTML="enter valid email";
     }

     if(regx1.test(email1)){
        document.getElementById("lblemail1").innerHTML="";
    }else{
       document.getElementById("lblemail1").innerHTML="enter valid email";
    }

     if(email1!=email){
        document.getElementById("lblemail").innerHTML="emails are not matching";
        document.getElementById("lblemail1").innerHTML="emails are not matching";
     }
     
     if(password.length<8)
     {
        document.getElementById("lblpass").innerHTML="Invalid! Password must have minimum 8 characters";
     }else{
        document.getElementById("lblpass").innerHTML="";
     }

     if(password1.length<8)
     {
        document.getElementById("lblpass1").innerHTML="Invalid! Password must have minimum 8 characters";
     }else{
        document.getElementById("lblpass1").innerHTML="";
     }
     
     if(password1!=password){
        document.getElementById("lblpass").innerHTML="Passwords are not matching";
        document.getElementById("lblpass1").innerHTML="Passwords are not matching";
     } 

     if(username.length<3 || username.length>20){
        document.getElementById("lbluser").innerHTML="Invalid! Number of characters must be between 3 and 20";
    }else{
        document.getElementById("lbluser").innerHTML="";
    }

    if(regx.test(phone)){
        document.getElementById("lblphone").innerHTML="";
     }else{
        document.getElementById("lblphone").innerHTML="Enter valid phone number";
     }

}