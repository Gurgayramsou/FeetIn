const optionDropDown = document.querySelector("#userOptions");
const userIconElem = document.querySelector("#userIcn");

userIconElem.addEventListener("mouseover", () => {
  optionDropDown.style.visibility = "visible";
});

setInterval(() => {
  optionDropDown.style.visibility = "hidden";
}, 5000);
