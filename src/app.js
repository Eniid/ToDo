import 'alpinejs'

console.log('test');
window.data = function() {
    return{
        filter : 'all',
        todos: [],
        newTodoTitle: null, 
        get activeTodos (){
            return this.todos.filter(todo => todo.completed !== true); 
        },
        get activeTodosCounts (){
            return this.activeTodos.length
        },
        get completedTodos (){
            return this.todos.filter(todo => todo.completed === true); 
        },
        get completedTodosCounts (){
            return this.completedTodos.length
        },
        get filtedTodo(){
            return {
                all: this.todos, 
                active:this.activeTodos, 
                completed: this.completedTodos,
            }[this.filter]
        },


        addTodo(){
            if(this.newTodoTitle.trim()){
                this.todos.push({
                    id:Date.now(), 
                    title: this.newTodoTitle, 
                    completed: false, 
                })   
            }
            this.newTodoTitle = '';
        },
        removeTodo (todo) {
            this.todos.splice(this.todos.indexOf(todo),1)
        },
        toggleCompleted(todo) {
            todo.completed = !todo.completed
        },

    }
}