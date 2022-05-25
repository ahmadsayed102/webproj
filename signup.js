function special(password){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
}
function signup(){
    let email = document.getElementById("email").value;
    let emailcheck = email.includes("@");
    let emailcheck2 = email.includes(".com");
    let aler="";
    let password = document.getElementById("password").value;
    let firstletter = password.charCodeAt(0);
    let passwordlength = password.length;
    let passwordcheck=password.includes("1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0");
    let phone = document.getElementById("mobile").value;
    let phonenumber = isNaN(phone);
    let phonelength = phone.length;
    document.forms[0].onsubmit = function (sign) {
        if(emailcheck==true && emailcheck2==true && firstletter >= 65 && firstletter <= 90 && special(password) == true && passwordlength == 8 && password.includes(" ") == false && phonelength == 11 && passwordcheck==1 && phonenumber == false){
            alert("Sign up successfully , let's start shopping ");
        }else{
            sign.preventDefault();
            if(emailcheck==false || emailcheck2==false){
                aler+="Not valid email , Email must countain '@' and '.com,";
                
            }
            if(!(firstletter >= 65 && firstletter <= 90)){
                aler+=" Password must start with upper case letter,";
            }
            if(special(password) == false){
                aler+=" Password must contain special character,";
            }
            if(passwordlength != 8){
                aler+=" Password must be 8 characters,";
            }
            if(password.includes(" ") == true){
                aler+=" Password can't contain spaces,";
            }
            if(phonelength != 11){
                aler+=" Not valid phone number , Phone number must be 11 numbers,";
            }
            if(phonenumber == true){
                aler+="  Phone number can only contain numbers,";
            }
            if(passwordcheck!=1){
                aler+=" Password must contain a number,";
            }
            alert(aler);
            window.location="signup.html";
        }
    }}