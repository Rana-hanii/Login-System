// get element 
let uName = document.getElementById("uName");


//display name on span
let Local = [];
Local = JSON.parse(localStorage.getItem('userData'))
console.log(Local);
 

let userNameHome = [];
function getUserName() {
    for ( let i = 0 ; i < Local.length ; i++) {
        userNameHome.push(Local[i].name)
    }
    console.log(userNameHome);
  }
  getUserName();

  for (let i = 0; i < userNameHome.length; i++) {
    uName.textContent = userNameHome[i];
  }