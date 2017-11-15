(function() {
  'use strict';

  angular.module('todoList', []).component('todoList', {
    templateUrl: 'assets/js/components/todo_list/todo.html',
    controller: TodoListController
  });

  function TodoListController(){
    // declare the view model
    // it is also the controller...
    var vm = this;

    vm.header = 'Awesome';
    vm.todos = [];
    vm.completedTodos = [];

    vm.handleSubmit = handleSubmit;
    vm.completeTodo = completeTodo;
    vm.removeTodo   = removeTodo;
    vm.changeHeading = changeHeading;

    //////////////////////////////

    function handleSubmit(){
      console.log(vm.commentForm);
      vm.todos.push(vm.todoText);
      //vm.todoText = '';
    }

    function completeTodo(todo){
      vm.todos.splice(vm.todos.indexOf(todo), 1);
      vm.completedTodos.push(todo);
    }

    function removeTodo(todo){
      vm.todos.splice(vm.todos.indexOf(todo), 1);
    }

    function changeHeading(todo){
      vm.header = todo;
    }
  }

})();
