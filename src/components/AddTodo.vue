<template>
  <div>
    <form @submit="addTodo">
      <input type="text" name="title" placeholder="Add Todo..." v-model="title" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return { title: "" };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>