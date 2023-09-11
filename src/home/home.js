const optionDropDown = document.querySelector("#userOptions");
const userIconElem = document.querySelector("#userIcn");

userIconElem.addEventListener("mouseover", () => {
  optionDropDown.style.visibility = "visible";
});

setInterval(() => {
  optionDropDown.style.visibility = "hidden";
}, 5000);

const modalBack = document.querySelector(".modalBack");
document.querySelector("#signOut").addEventListener("click", () => {
  modalBack.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  modalBack.style.zIndex = "20";
  document.querySelector(".modalWindow").style.zIndex = "30";
  return false;
});
