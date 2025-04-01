let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let loginBtn = document.getElementById("loginBtn");
let warningMss = document.getElementById("warningMss");
let validation = document.getElementById("validation");

// login button.............
loginBtn.addEventListener("click", () => {
  checkLogin();
  emailValidation()
  passValidation()
  // checkLogin();
});
function checkLogin() {
  let storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
  for (let i = 0; i < storedUsers.length; i++) {
    let user = storedUsers[i];
    if (
      user.email === userEmail.value &&
      user.password === userPassword.value
    ) {
      // Login successful
      console.log("Login successful!");
      window.location.assign("./Pages/home.html"); 
      return;
    }else{
      warningMss.classList.replace("d-none", "d-block");
    }
  }
  // Login failed
}
//validation..................
function emailValidation(){
  if(userEmail.value === ''){
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    validation.classList.replace("d-none", "d-block");
    warningMss.classList.replace("d-block", "d-none");
  }else{
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    validation.classList.replace("d-block", "d-none");
  }
}

function passValidation() {
  if( userPassword.value === ''){
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    validation.classList.replace("d-none", "d-block");
    warningMss.classList.replace("d-block", "d-none");
  }else{
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    validation.classList.replace("d-block", "d-none");
  }
}
