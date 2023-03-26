// const currentDisplay = document.querySelector(".currentDisplay");
// console.log(currentDisplay);

const keys = document.querySelector("#calnumbers-btn");
console.log(keys);

// const operator = document.querySelectorAll("#operator");
// console.log(operator);

const clearBtn = document.querySelector("#clear");
console.log(clearBtn);

const deleteBtn = document.querySelector("#delete");
console.log(deleteBtn);

const equals = document.querySelector("#equals");
console.log(equals);
const currentDisplay = document.querySelector(".currentDisplay");

// number.forEach((typeClick) => {
//   typeClick.addEventListener("click", function (e) {
//     e.preventDefault();
//     const value = currentDisplay.e.target.value;
//     console.log(value);
//   });
// });

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log(e.target);
    const key = e.target.dataset;
    console.log(key);
    // const action = key.dataset.action;
    // console.log(action);
  }
});
