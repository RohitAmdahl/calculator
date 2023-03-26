// const clearCta = document.querySelectorAll("[data-clear]");
// console.log(clearCta);
// const deleteCta = document.querySelectorAll("[data-delete]");
// console.log(deleteCta);
// const operatorCta = document.querySelectorAll("[data-operation]");
// const equals = document.querySelector("[data-equals]");
//  const input = document.querySelector("#display-1");
const calculatorCta = document.querySelectorAll("button");
console.log(calculatorCta);

const input = document.querySelector(".display");
console.log(input);

let inputValue = "";

calculatorCta.forEach((numberValue) => {
  numberValue.addEventListener("click", (e) => {
    e.preventDefault();
    const numberData = e.target.innerText;
    console.log("numberData text is ", numberData);
    if (numberData == "x") {
      numberData = "*";
      inputValue += numberData;
      input.value += innerText;
    } else if (numberData === "Ac") {
      input.value = "";

      console.log("object");
    } else if (numberData === "=") {
      input.value = eval(inputValue);
      console.log(inputValue);
    }
  });
});
