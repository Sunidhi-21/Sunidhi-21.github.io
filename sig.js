function validate(){
    var email=document.getElementById("email").value;
    var email1 = document.getElementById("email1").value;
    var username=document.getElementById("username").value;
   
     var password=document.getElementById("password").value;
     var password1=document.getElementById("password1").value;

     var phone=document.getElementById("phone").value;

     if(email1!=email){
         alert("re-enter the email")
     }
     
      if(password.length<8)
     {
         alert("password must have at leaast 8 chars");
     }

     if(password1!=password){
         alert("re-enter the password")
     }

     if(username.length<3 && username.length>20){
        alert("no of characters of the username must be between 3 and 20");
        return false;
     }

     if(phone.length!=10 ){
        alert("enter valid phone number")
     }
}