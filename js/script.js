var usernameInput = document.getElementById("usernameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");
var userInfo ;
if(localStorage.getItem("users") == null)
{
    userInfo = [];
} else {
    userInfo = JSON.parse( localStorage.getItem("users"));
}
function signUp() {
    userInputsValidation(); // low awl 7arf capital 
    isExist(); // lw user m4 mogod

    if(userInputsValidation() == true && isExist() == false)
    {
       var user = 
        {
            name:usernameInput.value, // alaa
            email:userEmailInput.value, // alaa@yahoo.com
            password:userPasswordInput.value, // 123456
        };
        // console.log(user);
        userInfo.push(user);
        console.log(userInfo);
        localStorage.setItem("users" , JSON.stringify(userInfo));
        // Show Msg
        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none","d-block");
        var signin = document.getElementById("signin");
        signin.classList.replace("d-none","d-block");
    } else {
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none","d-block");
    };
};

function userNameValidation()
{
    var usernameAlert = document.getElementById("usernameAlert");
    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/; // alaashaban alaa shaban
    if(regex.test(usernameInput.value) == true && usernameInput.value != "") {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block" , "d-none");
        return true ;
    } else {
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none" , "d-block");
        return false ;
    };
};


function userPasswordValidation(){
    var userPasswordAlert = document.getElementById("userPasswordAlert");
    var regex = /^.{5,15}$/;
    if(regex.test(userPasswordInput.value) == true && userPasswordInput.value != ""){
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block","d-none");
        return true;
    } else {
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none","d-block");
        return false;
    };
};

function userEmailValidation(){
    var userEmailAlert = document.getElementById("userEmailAlert");
    var regex = /@[a-z]{5,20}(\.com)$/;
    if(regex.test(userEmailInput.value) == true && userEmailInput.value != ""){
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block","d-none");
        return true;
    } else {
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none","d-block");
        return false;
    };
};



function userInputsValidation() {
     userNameValidation();
     userEmailValidation();
     userPasswordValidation();

     if(userNameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true)
     {
         return true;
     } else {
         return false ;
     }
}

function isExist() {
     var accountExistMsg = document.getElementById("accountExistMsg");
     for(var i = 0 ; i < userInfo.length ; i++)
     {
         if(userInfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() ||
          userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()) { // check al data al2dema bl data al gededa
             usernameInput.classList.remove("is-valid");
             userEmailInput.classList.remove("is-valid");
             return true ;
          }
     }
         
         return false ;
};

function login() {
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
     var loginBtn = document.getElementById("loginBtn");

    if(loginEmail.value == "" || loginPassword.value == ""){
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none","d-block");
        
        return false;
    }
      for(var i = 0; i < userInfo.length; i++){
          if(userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && 
              userInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()){
                loginBtn.setAttribute("href", "welcome.html");
              }
              else{
                var wrongMsg = document.getElementById("wrongMsg");
                wrongMsg.classList.replace("d-none","d-block");
              };
      };
};