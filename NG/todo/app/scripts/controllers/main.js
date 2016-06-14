'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description # MainCtrl Controller of the todoApp
 */

angular.module('todoApp').controller('MainCtrl', function($scope, Todo,$routeParams) {

	$scope.filter=$routeParams.filter||'all';
	
	//----------------------------------

	var service = {
		getFilteredTodos : function() {
			if ($scope.filter === 'active') {
				return this.getActiveTodos();
			}
			if ($scope.filter === 'completed') {
				return this.getCompletedTodos();
			}
			return todos;
		},
		getActiveTodos: function () {
			return todos.filter(function (todo) {
				return !todo.completed;
			});
		},
		getCompletedTodos: function () {
			return todos.filter(function (todo) {
				return todo.completed;
			});
		},
	};
	
	
	//-----------------------------------
	
	var todos=[];
	Todo.query(function(items){
		todos=items;
		$scope.todos = service.getFilteredTodos();
	});

	//-----------------------------------
	
	

	$scope.title = '';

	$scope.addTodo = function() {
		if ($scope.title) {
			var newTodo = {
				title : $scope.title,
				completed : false
			};
			Todo.save(newTodo, function(todo) {
				$scope.todos.push(todo);
				$scope.title = '';
			});
		}
	};
	$scope.removeTodo = function(id) {
		Todo.remove({
			id : id
		}, function(resp) {
			var todos = $scope.todos;
			todos.splice(todos.indexOf(_.findWhere(todos, {
				id : id
			})), 1);
		});
	};

	$scope.update = function(todo) {
		console.log('updating....');
		console.dir(todo);
		Todo.update(todo, function() {
			$scope.message = 'todo updated...';
		});
	};
	
	$scope.toggleCompleted=function(todo){
		Todo.update(todo, function() {
			$scope.message = 'todo updated...';
		});
	};

});
