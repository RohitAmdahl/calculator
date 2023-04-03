const calculatorCta = document.querySelectorAll("button");
console.log(calculatorCta);

const input = document.querySelector(".display");
console.log(input);

let inputValue = "";

calculatorCta.forEach((numberValue) => {
  numberValue.addEventListener("click", (e) => {
    const numberData = e.target.innerText;
    if (numberData === "*") {
      inputValue += numberData;
      input.value += innerText;
    } else if (numberData === "Ac") {
      input.value = "";
      input.value = inputValue;
    } else if (numberData === "Del") {
      input.value = "";
    } else if (numberData === "=") {
      input.value = eval(inputValue);
      console.log(inputValue);
    } else {
      inputValue += numberData;
      input.value = inputValue;
    }
  });
});
