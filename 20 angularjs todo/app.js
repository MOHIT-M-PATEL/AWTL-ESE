angular.module('todoApp', [])
    .controller('TodoController', function() {
        var todoCtrl = this;
        todoCtrl.todos = [];

        todoCtrl.addTodo = function() {
            if (todoCtrl.newTodo.trim() !== '') {
                todoCtrl.todos.push(todoCtrl.newTodo);
                todoCtrl.newTodo = '';
            }
        };

        todoCtrl.deleteTodo = function(index) {
            todoCtrl.todos.splice(index, 1);
        };
    });
