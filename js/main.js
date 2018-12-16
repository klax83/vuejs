// Vue.component('my-component', {
// 	template:
// 		<li v-for='task in todoList'>
// 			<label class='line'>{{ task }}</label>
// 			<button type="button" v-on:click='crossOut(task)'>DONE</button>
// 			<button type="button" v-on:click='removeTask(task)'>X</button>
// 		</li>
// }),
var todo = new Vue({
	el: '#todo',
	data: { 
		newTask: '',
		todoList: [],
		isDone: false
		
	},
	methods: {
		addTask: function() {
			var task = this.newTask;
			this.todoList.push(task);
			// console.log(this.todoList.length)
		},
		removeTask: function(task) {
			var index = this.todoList.indexOf(task);
			console.log(this.todoList.indexOf(task));
			this.todoList.splice(index, 1);
		},
		removeAll: function() {
			this.todoList = []
		},
		
	}
});