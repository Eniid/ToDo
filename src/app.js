import 'alpinejs'

console.log('test');
window.data = function() {
    return{
        edidting : false,
        filter : 'all',
        todos: [],
        todoEditing : null, 
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
        edit(todo, tick, field){
            todo.cachedTitle = todo.title
            if(this.todoEditing){
                delete this.todoEditing.edidting
            }
            this.todoEditing = todo
            todo.edidting = true
            tick(()=> {field.focus()}, 1000)
        },
        validateEditing(todo) {
            if(todo.title.trim()){
                delete todo.edidting
            } else {
                this.removeTodo(todo)
            }
        },
        cancelEdit(todo) {
            todo.title = todo.cachedTitle
            delete todo.cachedTitle
            delete todo.edidting
        }
    }
}