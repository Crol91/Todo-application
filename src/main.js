import "./style.css";

let todoObjects = [
  { act: "Gå upp" },
  { act: "Drick kaffe" },
  { act: "Åk till skolan" },
  { act: "Åk hem" },
  { act: "Träna" },
  { act: "Ät middag" },
  { act: "Gå till sängs" },
];

let todoList = [];

let doneList = [];

const savedTodoList = localStorage.getItem("todoList");
if (savedTodoList === null || JSON.parse(savedTodoList).length === 0) {
  todoList = todoObjects;
} else {
  todoList = JSON.parse(savedTodoList);
}

const savedDoneList = localStorage.getItem("doneList");
if (savedDoneList === null || JSON.parse(savedDoneList).length === 0) {
  doneList = [];
} else {
  doneList = JSON.parse(savedDoneList);
}

const createLi = () => {
  const todo = document.getElementById("todo");
  const done = document.getElementById("done");

  todo.innerHTML = "";
  done.innerHTML = "";

  todoList.forEach((activity, i) => {
    const todoItem = document.createElement("li");

    todoItem.className = "todoItem";
    todoItem.innerHTML = activity.act;
    todoItem.addEventListener("click", () => {
      doneList.push(activity);
      todoList.splice(i, 1);

      createLi();
    });

    todo.appendChild(todoItem);
  });

  doneList.forEach((activity, i) => {
    const doneItem = document.createElement("li");

    doneItem.className = "doneItem";
    doneItem.innerHTML = activity.act;
    doneItem.addEventListener("click", () => {
      todoList.push(activity);
      doneList.splice(i, 1);

      createLi();
    });
    done.appendChild(doneItem);
  });

  const todoListSet = JSON.stringify(todoList);
  localStorage.setItem("todoList", todoListSet);
  const doneListSet = JSON.stringify(doneList);
  localStorage.setItem("doneList", doneListSet);
};

createLi();
