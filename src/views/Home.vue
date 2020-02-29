<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: { Todos, AddTodo },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(
          () =>
            (this.todos = this.todos = this.todos.filter(
              todo => todo.id !== id
            ))
        )
        .catch(err => console.error(err));
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(response => (this.todos = [...this.todos, response.data]))
        .catch(err => console.error(err));
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => (this.todos = response.data))
      .catch(err => console.error(err));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
