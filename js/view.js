import { removeButtons, checkboxes, addForm, container } from "./controler.js";

const priorityList = {
	high: 0,
	low: 1,
}

const tasks = [];

for (let form of addForm) {
	form.addEventListener("submit", createTask);
}

function Task(text, priority) {
	this.text = text;
	this.priority = priority;
}

function addEventOnButtons() {
	for (let button of removeButtons) {
		button.addEventListener("click", removeTask)
	}
	for (let checkbox of checkboxes) {
		checkbox.addEventListener("click", markTask)
	}
}
addEventOnButtons();

function createTask(event) {
	event.preventDefault();
	let textValue = this.text.value;
	if (!textValue) {
		return;
	}
	let priority = this.getAttribute('name');
	tasks.push(new Task(textValue, priority));
	console.log(tasks);
	let currentContainer = container[priorityList[priority]];
	currentContainer.insertAdjacentHTML("beforeend", `<li class="task"><label class="checkbox-wrap"><input class="checkbox" type="checkbox"></label><p class="text">${textValue}</p><button class="remove-button"></button></li>`);
	addEventOnButtons();
}

function removeTask() {
	let div = this.closest('.task');
	if (!!div) {
		div.remove();
	}
}

function markTask() {
	let div = this.closest('.task');
	if (!!div) {
		if (this.checked) {
			div.classList.add('task-done');
		}
		else {
			div.classList.remove('task-done');
		}
	}
}

