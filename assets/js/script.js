const addBtn = document.querySelector("button");
const test = document.querySelector("#add-exercise");
const firstCol = document.querySelector("#first-column");
const optionCont = document.getElementsByTagName("select");

let createExercise = () => {
  const listItem = document.createElement("li");
  const listPara = document.createElement("p");

  listPara.className =
    "exercise-task has-background-primary-light has-text-info p-1";
  listPara.textContent = "This is a test";

  listItem.appendChild(listPara);
  firstCol.appendChild(listItem);
};

let createNums = () => {
  Array.from(optionCont).forEach((x) => { //Array.from makes the array-like object into an actual Array
    for (let i = 0; i < 100; i++) {
      const numCont = document.createElement("option");
      numCont.text = i;
      x.appendChild(numCont);
    }
  });
};

createNums();

addBtn.addEventListener("click", createExercise);
