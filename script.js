var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");

// Get length of input field
function inputLength() {
	return input.value.length;
}

// Get a new Delete button to add with a list item
function getDelBtn(){
	var btn = document.createElement("button");
	btn.innerHTML = "X";
	btn.addEventListener("click", delList);
	btn.style.marginLeft = "10px";
	return btn;
}

// Create a new list element and add to list of items
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(getDelBtn());
	li.addEventListener("click", toggleDone);

	ul.appendChild(li);
	input.value = "";
}

// Function to run on event of "Add" button click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Function to run on event of pressing "Enter" key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Function to toggle strike-through on list item
function toggleDone(event){
	this.classList.toggle("done");
}

// Add event listeners for list item
function addtoggleDoneDelete(item, index){
	item.addEventListener("click", toggleDone);
	item.appendChild(getDelBtn());
}

// Function to run when "Delete" button is clicked
function delList(){
	var idx = this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(addtoggleDoneDelete);
