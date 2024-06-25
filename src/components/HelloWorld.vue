
<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed"> {{ todo.text }}
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodoText" placeholder="Add new todo...">
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build an awesome app', completed: true }
]);
const newTodoText = ref('');

const addTodo = () => {
  if (newTodoText.value.trim() === '') return;
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodoText.value,
    completed: false
  });
  newTodoText.value = '';
};

const deleteTodo = (id) => {
  const index = todos.value.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.value.splice(index, 1);
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
}
</style>
