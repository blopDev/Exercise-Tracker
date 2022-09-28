let timesCont = document.querySelector("#times");
let setCont = document.querySelector("#sets");

let createNums = () => {
  for (let i = 0; i <= 100; i++) {
    const numCont1 = document.createElement("option"),
      numCont2 = document.createElement("option");
    numCont1.text = i;
    numCont2.text = i;
    timesCont.appendChild(numCont1);
    setCont.appendChild(numCont2);
  }
};
createNums();

let exeInput = document.querySelector("input");
let editCheck = document.querySelector('#exercise-input-list')

let fromHandler = () => {

  let numRegex = /\d/;
  let inputVal = exeInput.value;
  let numCheck = inputVal[inputVal.search(numRegex)];
 
  if (!inputVal || numCheck) {
    alert("Please fill in the form. No numbers should be included!");
    return;
  }

  let isEdit = editCheck.hasAttribute('data-exercise')
  
  if(isEdit) {
    let exeAtt = editCheck.getAttribute('data-exercise')
    console.log(exeAtt)
    completeEdit(exeAtt)
    resetForm()
  } else {
    createExercise(inputVal)
    resetForm();
  }

};

const firstCol = document.querySelector("#first-column");
let dataCounter = 0;

let createExercise = (inputVal) => {
  const listItem = document.createElement("li");
  listItem.className =
    "exercise-task has-background-primary-light has-text-info is-size-4 p-1";
  listItem.setAttribute("data-exercise", dataCounter);
  listItem.innerHTML = `<h3 class="exercise-item-title title is-size-4 has-text-link">${inputVal}</h3>
  <div class="card is-size-5">
    <div class="card-content has-text-centered">
      <span class="exercise-item-times">${timesCont.value}</span><span> Times |</span>
      <span class="exercise-item-sets"> ${setCont.value}</span><span> Sets</span>
    </div>
  </div>
  <footer class="card-footer is-size-5">
    <a class="edit-exercise card-footer-item" data-exercise="${dataCounter}">Edit</a>
    <a class="delete-exercise card-footer-item" data-exercise="${dataCounter}">Delete</a>
    <div class="select status-select is-primary">
      <select class="status" name="status" data-exercise="${dataCounter}">
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  </footer>`;
  firstCol.appendChild(listItem);

  dataCounter++;

  resetForm();
};

let resetForm = () => {
  exeInput.value = "";
  timesCont.value = 0;
  setCont.value = 0;
};
const secCol = document.querySelector("#second-column");

let statusHandler = (event) => {
  let exeAtt = event.target.getAttribute("data-exercise");

  let exeStatus = event.target.value;

  let exeSelected = document.querySelector(`li[data-exercise="${exeAtt}"`);

  if (exeStatus === "Completed") {
    secCol.appendChild(exeSelected);
  } else {
    firstCol.appendChild(exeSelected);
  }
};

let buttonHandler = (event) => {
  event = event.target;
  let exeAtt = event.getAttribute("data-exercise");
  let exeSelected = document.querySelector(`li[data-exercise="${exeAtt}"`);

  if (event.matches(".delete-exercise")) {
    deleteBtn(exeSelected);
  } else if (event.matches(".edit-exercise")) {
    editBtn(exeSelected, exeAtt);
  } else {
    return;
  }
};

let deleteBtn = (exeSelected) => {
  exeSelected.remove();
};

let editBtn = (exeSelected, exeAtt) => {
  console.log(exeAtt)
  let exeName = exeSelected.querySelector(".exercise-item-title");
  let exeSelectTimes = exeSelected.querySelector(".exercise-item-times");
  let exeSelectSets = exeSelected.querySelector(".exercise-item-sets");

  exeSelectSets = parseInt(exeSelectSets.textContent);
  exeSelectTimes = parseInt(exeSelectTimes.textContent);
  exeInput.value = exeName.textContent;
  timesCont.value = exeSelectTimes;
  setCont.value = exeSelectSets;

  editCheck.setAttribute('data-exercise', exeAtt)
  addBtn.textContent = 'Edit Exercise'
};

let completeEdit = (exeAtt) => {
  console.log(exeAtt)
  let exeSelected = document.querySelector(`li[data-exercise="${exeAtt}"`);
  
  let exeName = exeSelected.querySelector(".exercise-item-title");
  let exeSelectTimes = exeSelected.querySelector(".exercise-item-times");
  let exeSelectSets = exeSelected.querySelector(".exercise-item-sets");

  exeName.textContent = exeInput.value
  exeSelectTimes.textContent = timesCont.value
  exeSelectSets.textContent = setCont.value
  editCheck.removeAttribute('data-exercise')
  addBtn.textContent = 'Add Exercise'
}


const addBtn = document.querySelector("button");
addBtn.addEventListener("click", fromHandler);

const kanban = document.querySelector("#kanban-section");

kanban.addEventListener("change", statusHandler);
kanban.addEventListener("click", buttonHandler);
