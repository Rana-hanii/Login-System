/*
 *get data from input >> sign up btn >> save array --
 *save date in local storage >> set login--
 *validation >> sign up
 *clear input (valid/invalid)
 *create a mss >> press in login>>after sign up
 */
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let signUpbtn = document.getElementById("signUpbtn");
let nameInvalid = document.getElementById("nameInvalid");
let emailInvalid = document.getElementById("emailInvalid");
let passwordInvalid = document.getElementById("passwordInvalid");
let successMss = document.getElementById("successMss");
let warningMss = document.getElementById("warningMss");
let repeatedMss = document.getElementById("repeatedMss");

// save on local storage....................
// console.log("hello");
let userData;
if (localStorage.getItem("userData")) {
  userData = JSON.parse(localStorage.getItem("userData"));
} else {
  userData = [];
}
//sign up btn..............................
// console.log(isRepeated());

function getUserdata() {
  if (isRepeated()) {
    if (nameValidation() && emailValidation() && passwordValidation()) {
      let user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
      };
      userData.push(user);
      console.log(user);
      saveTolocalStorage();
      isSuccess();
      //   clearInputs()
    } else {
      isEmpty()
      console.log("error");
    }
  } else {

    console.log("error");
  }
}

// save on local storage....................
function saveTolocalStorage() {
  localStorage.setItem("userData", JSON.stringify(userData));
}
console.log(userData);

//validation................................
function nameValidation() {
  let regex = /^[a-zA-Z\s]+$/;
  // console.log(regex.test(userName.value));
  if (regex.test(userName.value)) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    nameInvalid.classList.replace("d-block", "d-none");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    nameInvalid.classList.replace("d-none", "d-block");
    return false;
  }
}
function emailValidation() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log(regex.test(userEmail.value));
  if (regex.test(userEmail.value)) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    emailInvalid.classList.replace("d-block", "d-none");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    emailInvalid.classList.replace("d-none", "d-block");
    return false;
  }
}
function passwordValidation() {
  let regex = /^[\w\ .]{8,} {0,}$/;
  // console.log(regex.test(userPassword.value));
  if (regex.test(userPassword.value)) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    passwordInvalid.classList.replace("d-block", "d-none");
    return true;
  } else {
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    passwordInvalid.classList.replace("d-none", "d-block");
    return false;
  }
}
// clear inputs after adding................
// function clearInputs() {
//     userName.value = null;
//     userEmail.value = null;
//     userPassword.value = null;
//     userName.classList.remove("is-invalid");
//     userName.classList.remove("is-valid");
//     userEmail.classList.remove("is-valid");
//     userEmail.classList.remove("is-invalid");
//     userPassword.classList.remove("is-valid");
//     userPassword.classList.remove("is-invalid");
//   }

// to check repeated emails....................
function isRepeated() {
  for (var i = 0; i < userData.length; i++) {
    // console.log(userData[i].email === userEmail.value);
    if (userData[i].email === userEmail.value) {
      console.log("false");
      repeatedMss.classList.replace("d-none", "d-block");
      return false;
    }
  }
  repeatedMss.classList.replace("d-block", "d-none");
  return true;
}
//sign up success
function isSuccess() {
  successMss.classList.replace("d-none", "d-block");
  repeatedMss.classList.replace("d-block", "d-none");
  warningMss.classList.replace("d-block", "d-none");
}
//empty inputs
function isEmpty() {
  if (
    userEmail.value === null &&
    userName.value === null &&
    userPassword.value === null || userEmail.value === '' && userName.value === '' &&
    userPassword.value === ''
  ) {
    nameInvalid.classList.replace("d-block", "d-none");
    warningMss.classList.replace("d-none", "d-block");
  } else {
    console.log("not empty");
  }
}
// isEmpty()