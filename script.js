const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//Count todo and 
function countTodo() {

  //Get all checkbox tags
  const checkBoxList = document.getElementsByClassName(classNames.TODO_CHECKBOX);

  //Initialize the counter for checkbox.
  itemCount = 0;
  unCheckedCount = 0;

  //Iterate to check if the checkbox was checked or not
  for (let i = 0; i < checkBoxList.length; i++) {
    if (checkBoxList[i].checked === true) {
      //Count the checked checkbox
      itemCount++;
    }
    else {
      //Count the unchecked checkbox
      unCheckedCount++;
    }
  }

  //Display the result to the frontend
  itemCountSpan.innerText = itemCount;
  uncheckedCountSpan.innerText = unCheckedCount;
}

function getToDo(){

   //Default sentence on the prompt ext
   const defaultString = "Type a new TODO List";

  //Initialize the input variable
  let newTodo = "";
  //Get a new todo list
  newTodo = window.prompt("Enter your TODO item", defaultString);

  //Clear the empty spaces 
  return newTodo.trim();

}

function newTodo() {
  //Default sentence on the prompt ext
  const defaultString = "Type a new TODO List";

  //Display on the checkbox
  const checkBoxWord = "Please check on the checkbox if you want to do";

  //Clear the empty spaces 
  const newTodo = getToDo();
  
  //If the sentence in the prompt word is empty or default
  if (newTodo === defaultString || newTodo.length === 0) {
    alert("Please type something");
  }
  else {  //If the user type something

    //Automatically add 1 to unchecked count when the button was clickied to add a new item
    uncheckedCountSpan.innerText++;

    //Create list tag
    const newItem = document.createElement("li");

    //Add class name to <li>
    newItem.classList.add(classNames.TODO_ITEM);

    //Create the TODO text
    const newToDoText = document.createElement("p");

    //Add class name to <p>
    newToDoText.classList.add(classNames.TODO_TEXT);

    //Input the TODO test
    newToDoText.innerText = newTodo;

    //Create a check box
    const toDoCheckBox = document.createElement("input");

    //Add class name to <input>
    toDoCheckBox.classList.add(classNames.TODO_CHECKBOX);

    //Specified the input type
    toDoCheckBox.type = "checkbox";

    //Call countTodo when the checkbox is clicked
    toDoCheckBox.addEventListener("click", countTodo);

    //Create a check box label
    const checkBoxLabel = document.createElement("label");

    //Specified the input type
    checkBoxLabel.innerText = checkBoxWord;

    //Append the TODO checkbox
    newItem.appendChild(toDoCheckBox);

    //Append the todo checkbox label
    newItem.appendChild(checkBoxLabel);

    //Append the TODO text
    newItem.appendChild(newToDoText);

    //Display the todo list inside <ul>
    list.appendChild(newItem);
  }
}
