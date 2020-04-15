export default {
    doneTodos: state => {
        return state.todos.filter(todo => todo.complent)
    },
    todosNum: (state,getters) => {
        return getters.doneTodos.length;
    },
    getTodoByid: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    } 
}