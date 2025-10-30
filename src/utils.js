export const createLi = (todoList, doneList) => {
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

      createLi(todoList, doneList);
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

      createLi(todoList, doneList);
    });
    done.appendChild(doneItem);
  });

  const todoListSet = JSON.stringify(todoList);
  localStorage.setItem("todoList", todoListSet);
  const doneListSet = JSON.stringify(doneList);
  localStorage.setItem("doneList", doneListSet);
};
