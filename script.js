let taskInput = document.getElementById("task");
let button = document.getElementById("addBtn");
let taskList = document.getElementById("List");

button.addEventListener("click", () => {
  let inputText = taskInput.value.trim();
  if (inputText === "") {
    alert("Please add your task here...");
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = inputText;

  let div = document.createElement("div");


  let editButton = document.createElement("button");
  editButton.textContent = "Edit";

  editButton.addEventListener("click", () => {
    taskInput.value = li.firstChild.textContent;
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  div.appendChild(deleteBtn);
  div.appendChild(editButton);

  li.appendChild(span);
  li.appendChild(div);
  taskList.appendChild(li);

  taskInput.value = "";
});

