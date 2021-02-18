var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function getDelBtn(){
	var btn = document.createElement("button");
	btn.innerHTML = "X";
	btn.addEventListener("click", delList);
	btn.style.marginLeft = "10px";
	return btn;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(getDelBtn());
	li.addEventListener("click", toggleDone);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event){
	this.classList.toggle("done");
}

function addtoggleDoneDelete(item, index){
	item.addEventListener("click", toggleDone);
	item.appendChild(getDelBtn());
}

function delList(){
	var idx = this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(addtoggleDoneDelete);
