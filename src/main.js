import "./style.css";

let todoList = [
  "Gå upp",
  "Drick kaffe",
  "Åk till skolan",
  "Åk hem",
  "Träna",
  "Ät middag",
  "Gå till sängs",
];

let doneList = [];

const createLi = () => {
  const todo = document.getElementById("todo");
  const done = document.getElementById("done");

  todo.innerHTML = "";
  done.innerHTML = "";

  todoList.forEach((activity, i) => {
    const todoItem = document.createElement("li");

    todoItem.className = "todoItem";
    todoItem.innerHTML = activity;
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
    doneItem.innerHTML = activity;
    doneItem.addEventListener("click", () => {
      todoList.push(activity);
      doneList.splice(i, 1);

      createLi();
    });
    done.appendChild(doneItem);
  });
};

createLi();
