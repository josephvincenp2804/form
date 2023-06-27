var email = document.getElementById('field1');
var err1 = document.getElementById('err1');
var pwd = document.getElementById('field2');
var err2 = document.getElementById('err2');
var num= document.getElementById('field3');
var err3 = document.getElementById('err3');


var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]){2,3}.([a-z]{2,3})?$/
var password=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
var pho= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

function validateEmail(){
    if(email.value.trim()==''){
        err1.innerText="Field cannot be empty";
        email.style.border='5px solid blue';
        return false
    }
    else if (!email.value.match(regex)) {
        console.log('hihih0')
    err1.innerText="Email not correct ";   
    email.style.border='5px solid red';
    return false
}
else{
    err1.innerText="";
    email.style.border='5px solid green';
    return true
}

}

function validatePnumber(){

if (num.value.trim()==''){
err3.innerText='Field cannot be empty';
num.style.border= '5px solid red';
return false

}

else if(!num.value.match(pho)) {
err3.innerText='Phone Number is not in correct format'; 
num.style.border= '5px solid red'

return false;
}
else
{
err3.innerText="";
 num.style.border='3px solid green'

return true;}

}







function validatePass(){
    console.log('hihih0')
    
    if(pwd.value.trim()==''){
        err2.innerText="Field cannot be emmpty";
        pwd.style.border="5px solid red";
        
        return false
    }
else if(!pwd.value.match(password)){
    err2.innerText="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
      pwd.style.border="5px solid red";
      
      return false

}
else{
    err2.innerText="";
    pwd.style.border='5px solid green';
    return true
}
}
function verify(){
    if(!validateEmail()||!validatePass()){
        return false  
    }
    else{
        return true
    }
}
