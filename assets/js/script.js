const addBtn = document.querySelector("button");
const test = document.querySelector("#add-exercise").textContent;
const firstCol = document.querySelector("#first-column");





let createExercise = () => {
    const listItem = document.createElement("li");
    const listPara = document.createElement("p");
    listPara.className = 'exercise-task has-background-primary-light has-text-info p-1'
    listPara.textContent = "This is a test";
  
    listItem.appendChild(listPara);
    firstCol.appendChild(listItem);
}

addBtn.addEventListener("click", createExercise);

console.log(test);

console.log(addBtn);
