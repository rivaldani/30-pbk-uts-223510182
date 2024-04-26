<template>
  <div class="todo-app">
    <h1>List Mobil</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" placeholder="Input Data..." />
      <button type="submit" class="primary">Tambah</button>
    </form>
    <h2>List Item</h2>
    <div class="filter-section">
      <button @click="filterTodos('all')" class="filter-btn">Semua</button>
      <button @click="filterTodos('active')" class="filter-btn">Belum Terbeli</button>
      <button @click="filterTodos('completed')" class="filter-btn">Terbeli</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in filteredTodos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)" class="danger">Hapus</button>
      </li>
    </ul>
    <footer>
      <p>Rivaldani</p>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        text: this.newTodo,
        done: false,
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    filterTodos(filterType) {
      this.filter = filterType;
    },
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.done);
        case 'completed':
          return this.todos.filter(todo => todo.done);
        default:
          return this.todos;
      }
    },
  },
};

</script>

<style>
/* General Styles */
*{
  color: #333;
}
body {
  font-family: serif; /* Elegant serif font for a luxurious feel */
  margin: 0;
  background-image: url(/src/assets/mbl.jpeg); 
  background: cover;
background-size: cover;
background-repeat: no-repeat;
}

/* Todo List Container */
.todo-app {
  max-width: 600px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* More prominent shadow for depth */
  background-color:aliceblue; /* White background for clear text */
}

/* Heading */
.todo-app h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Input Form */
.todo-app form {
  display: flex;
  margin-bottom: 20px;
}

.todo-app input[type=text] {
  flex: 1;
  padding: 15px 20px; /* Increase padding for a more spacious feel */
  font-size: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle inset shadow for a luxurious touch */
}

.todo-app button[type=submit] {
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #9b59b6; /* Deep purple for luxury, adjust to your preference */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; /* Smooth hover effect */
}

.todo-app button[type=submit]:hover {
  background-color: #8e44ad; /* Darker shade on hover for visual feedback */
}

/* Task List */
.todo-app .todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space out items evenly */
  margin-bottom: 15px; /* Increase spacing for a more luxurious look */
  padding: 15px 20px; /* Add padding for better separation */
  border-radius: 5px; /* Rounded corners for a softer feel */
  background-color: #f5f5f5; /* Light gray background for tasks */
  transition: background-color 0.2s ease-in-out; /* Smooth hover effect */
}

.todo-list li:hover {
  background-color: #e0e0e0; /* Slightly darker shade on hover for better feedback */
}

.todo-list input[type=checkbox] {
  margin-right: 10px;
}

.todo-list .done {
  text-decoration: line-through;
  color: #999; /* Lighter color for completed tasks, adjust for contrast */
}

.todo-list button {
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #e74c3c; /* Red for removing tasks, adjust to your preference */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out; /* Smooth hover effect */
}

.todo-list button:hover {
  background-color: #c0392b; /* Darker shade on hover for visual feedback */
}

/* Footer */
footer {
  text-align: center;
  margin-top: 20px; /* Add some space after the list */

}


</style>