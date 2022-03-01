import { removeButtons, checkboxes, addForm, container } from "./view.js";

const priorityList = {
	high: 0,
	low: 1,
}

for (let form of addForm) {
	form.addEventListener("submit", createTask);
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
	let currentContainer = container[priorityList[priority]];
	currentContainer.insertAdjacentHTML("beforeend", `<div class="task"><label class="checkbox-wrap"><input class="checkbox" type="checkbox"></label><p class="text">${textValue}</p><button class="remove-button"></button></div>`);
	addEventOnButtons();
}

function removeTask() {
	let div = this.parentElement;
	let divAttributes = div.getAttribute('class');
	if (divAttributes.includes('task')) {
		div.remove();
	}
}

function markTask() {
	let div = this.parentElement.parentElement;
	let divAttributes = div.getAttribute('class');
	if (divAttributes.includes('task')) {
		if (this.checked) {
			div.classList.add('task-done');
		}
		else {
			div.classList.remove('task-done');
		}
	}
}

