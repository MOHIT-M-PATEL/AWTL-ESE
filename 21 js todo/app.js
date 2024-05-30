let todos = [];

function addTodo() {
    const newTodoInput = document.getElementById('newTodoInput');
    const todoText = newTodoInput.value.trim();
    
    if (todoText !== '') {
        todos.push(todoText);
        newTodoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(index);
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Initial rendering
renderTodos();
