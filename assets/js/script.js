let optionCont = document.getElementsByTagName("select");

optionCont = Array.from(optionCont); //Array.from makes the array-like object (optionCont) into an actual Array

let createNums = () => {
  optionCont.forEach((x) => {
    for (let i = 0; i <= 100; i++) {
      const numCont = document.createElement("option");
      numCont.text = i;
      x.appendChild(numCont);
    }
  });
};
createNums();

let exeInput = document.querySelector("input");

let fromHandler = () => {
  let numRegex = /\d/;
  let inputVal = exeInput.value;
  let numCheck = inputVal[inputVal.search(numRegex)];

  if (!inputVal || numCheck) {
    alert("Please fill in the form. No numbers should be included!");
    return;
  } else {
    createExercise(inputVal);
  }
};

const firstCol = document.querySelector("#first-column");
let sets = document.querySelector(".sets");
let times = document.querySelector(".times");

let createExercise = (inputVal) => {
  const listItem = document.createElement("li");
  listItem.className =
    "exercise-task has-background-primary-light has-text-info is-size-4 p-1";
  listItem.innerHTML = `${inputVal}<div class="card is-size-5"><div class="card-content has-text-centered"><p>${times.value} Times | ${sets.value} Sets</p></div></div><footer class="card-footer is-size-5"><a class="edit-exercise card-footer-item">Edit</a><a class="delete-exercise card-footer-item">Delete</a></footer>`;
  firstCol.appendChild(listItem);
};
const addBtn = document.querySelector("button");
addBtn.addEventListener("click", fromHandler);
