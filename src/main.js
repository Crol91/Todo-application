import "./style.css";
import { Activity } from "./models/activity";
import { createLi } from "./utils";

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

const handleSubmit = (e) => {
  e.preventDefault();

  const act = document.getElementById("act").value;

  const sumbittedAct = new Activity(act);

  todoList.push(sumbittedAct);

  localStorage.setItem("todoList", JSON.stringify(todoList));

  createLi(todoList, doneList);
};

const actForm = document.getElementById("actForm");

if (actForm) {
  actForm.addEventListener("submit", handleSubmit);
}

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

createLi(todoList, doneList);
