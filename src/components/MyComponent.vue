<template>
    <div class="todo-container">
      <img src="@/assets/pembalap.jpeg" alt="Vue Logo" class="logo">
      <h1>Todo List</h1>
      <div class="todo-item">
        <input type="checkbox" id="learn-vue">
        <label for="learn-vue">Learn Vue.js</label>
        <button>Delete</button>
      </div>
      <div class="todo-item">
        <input type="checkbox" id="build-app" checked>
        <label for="build-app">Build an awesome app</label>
        <button>Delete</button>
      </div>
      <input type="text" placeholder="Add new todo...">
      <button>Add Todo</button>
      <div class="tabs">
        <a href="#">Todolist</a>
        <a href="#">Posts</a>
        <a href="#">Albums</a>
        <a href="#">Post</a>
        <select>
          <option>Select a user</option>
        </select>
      </div>
      <h2>Todos</h2>
      <div class="post-list">
        <button>Load Posts</button>
        <p>Additional content can go here.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
  };
  </script>
  
  <style scoped>
  .todo-container {
    background-image: url('@/assets/mbl.jpg'); /* Mengatur gambar latar belakang */
    background-size: cover;  /* Menyesuaikan gambar agar menutupi seluruh kontainer */
    background-position: center;  /* Memusatkan gambar */
    background-repeat: no-repeat;  /* Tidak mengulang gambar */
    padding: 20px;  /* Memberikan padding */
    color: white;  /* Mengubah warna teks menjadi putih agar terlihat di atas gambar */
  }
  
  .logo {
    width: 100px;  /* Mengatur ukuran logo */
    display: block;
    margin-bottom: 20px;
  }
  
  .todo-item {
    margin-bottom: 10px;  /* Memberikan jarak antar item todo */
  }
  
  .tabs a {
    margin-right: 10px;  /* Memberikan jarak antar link tab */
  }
  
  .post-list button {
    margin-top: 20px;  /* Memberikan jarak atas pada tombol "Load Posts" */
  }
  </style>
  