// find elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#input-tudo");
const button = document.querySelector(".btn");
const todoLists = document.querySelector("#lists");
const message = document.querySelector("#message");

// createTodo
const createTodo = (todoID, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoID;
    todoElement.classList.add("li-style");

    todoElement.innerHTML = `
        <span> ${todoValue} </span>
        <span> <button class = "btn" id = "delete-button"> <i class="fa-solid fa-trash-can"></i> </button> </span>
    `
    todoLists.appendChild(todoElement);
}

//getTodosFromLocalStorage
// getTodosFromLocalStorage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("projectTodos")
      ? JSON.parse(localStorage.getItem("projectTodos"))
      : [];
  };
// showMessage
const showMessage = (text, status) => {
    message.textContent = text;
    message.classList.add(`bg-${status}`); 
    setTimeout(() => {
      message.textContent = "";
      message.classList.remove(`bg-${status}`);  
    }, 1000)
    
}

// addTodo
const addTodo = (event) => {
    event.preventDefault()
    todoValue = todoInput.value;

    //unique id
    const todoID = Date.now().toString();
    console.log(todoID)
    createTodo(todoID, todoValue)
    showMessage("Todo is added", "success");

    // add todos in localstorage
    const todos = getTodosFromLocalStorage();
    todos.push({todoID, todoValue});
    localStorage.setItem("projectTodos", JSON.stringify(todos));

    todoInput.value = "";
};

// add eventlistener
todoForm.addEventListener("submit", addTodo);