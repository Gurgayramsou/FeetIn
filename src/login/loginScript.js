import { user } from "./models/user.js";

var emailInput = document.querySelector("#email");
var pwInput = document.querySelector("#pw");
emailInput.addEventListener("keyup", () => {
  const userMail = emailInput.value;
  if (user.map((usr) => usr.email).includes(userMail)) {
    var checkmark = document.querySelector(".checkmark");
    checkmark.style.visibility = "visible";
    checkmark.style.transitionDelay = "0.3s";
    checkmark.style.transitionDuration = "2s";
    checkmark.style.transitionTimingFunction = "ease-out";
  } else {
    document.querySelector(".checkmark").style.visibility = "hidden";
  }
});

setInterval(() => {
  if (!emailInput.value) {
    document.querySelector(".checkmark").style.visibility = "hidden";
  }
}, 10);

// document.querySelector('button').addEventListener('click',
// ()=>{
//     console.log(pwInput.value)
//     console.log(user.find((usr)=>usr.email=emailInput.value).pw ==pwInput.value);
//     if(user.find((usr)=>usr.email=emailInput.value).pw ==pwInput.value ){

//     }
// })
