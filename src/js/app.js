const currentDisplay = document.querySelector(".currentDisplay");
console.log(currentDisplay);

const number = document.querySelectorAll("#number");
console.log(number);

number.onclick = function myBtn() {
  console.log("button .value");
};
