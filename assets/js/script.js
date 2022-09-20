const addBtn = document.querySelector("button");
const firstCol = document.querySelector("#first-column");
let optionCont = document.getElementsByTagName("select");

let test = document.querySelector(".sets");

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

optionCont.forEach((element) => {
  element.addEventListener("change", (e) => {
    let val = e.target.value;
    console.log(val);
  });
});

test.addEventListener('change', (e) => {
    let val = e.target.value;
    console.log(val)
})

let createExercise = () => {
  const listItem = document.createElement("li");
  const listPara = document.createElement("p");

  listPara.className =
    "exercise-task has-background-primary-light has-text-info p-1";
  listPara.textContent = "This is a test";

  listItem.appendChild(listPara);
  firstCol.appendChild(listItem);
};

addBtn.addEventListener("click", createExercise);
