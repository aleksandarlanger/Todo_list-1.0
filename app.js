// Variables
let todoTask = document.querySelector("#input--box");
let todoStorage = "";

// logic

let newTodo = document
  .querySelector("#addTodo")
  .addEventListener("click", addButton);

function addButton() {
  if (todoTask.value.length == 0) {
    alert("Please enter a valid task.");
  } else {
    todoStorage = todoTask.value;
    const list = document.querySelector("#list");
    list.innerHTML += `<li> * ${todoStorage} <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>  </li> `;
    todoTask.value = "";

    //   delete button
    var current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
}
