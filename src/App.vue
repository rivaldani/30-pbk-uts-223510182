<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="src/assets/pembalap.jpeg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="ToDolist Mobil Impian" />
        <nav>
          <RouterLink to="/">Todolist</RouterLink>
          <RouterLink to="/posts">Posts</RouterLink>
          <RouterLink to="/albums">Albums</RouterLink>
          <button @click="showPostForm = true">Post</button>
          <select v-model="selectedUser">
            <option disabled value="">Select a user</option>
            <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
          </select>
        </nav>
      </div>
    </header>

    <RouterView />
    <div v-if="showPostForm">
      <h2>Create a new post</h2>
      <form @submit.prevent="submitPost">
        <label for="title">Title:</label><br>
        <input type="text" id="title" v-model="newPost.title" required><br>

        <label for="body">Body:</label><br>
        <textarea id="body" v-model="newPost.body" required></textarea><br>

        <button type="submit">Submit</button>
      </form>
    </div>
    <PostList @show-detail="displayDetail">
      <template #extra-content>
        <p>Additional content can go here.</p>
      </template>
    </PostList>
    <div v-if="selectedPost">
      <h2>Post Details</h2>
      <h3>{{ selectedPost.title }}</h3>
      <p>{{ selectedPost.body }}</p>
    </div>

    <TodoList />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import PostList from './components/PostList.vue';


// State
const showPostForm = ref(false);
const newPost = ref({
  title: '',
  body: ''
});
const selectedUser = ref('');
const users = ref([]);
const selectedPost = ref(null);

// Fetch users from JSONPlaceholder
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const data = await response.json();
      users.value = data;
    } else {
      console.error('Failed to fetch users');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
fetchUsers();

// Submit post
const submitPost = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newPost.value,
        userId: selectedUser.value
      })
    });

    if (response.ok) {
      console.log('Post submitted successfully');
      newPost.value.title = '';
      newPost.value.body = '';
      selectedUser.value = '';
      showPostForm.value = false;
    } else {
      console.error('Failed to submit post');
    }
  } catch (error) {
    console.error('Error submitting post:', error);
  }
};

const displayDetail = (post) => {
  selectedPost.value = post;
};
</script>

<style scoped>
#app {
  background-image: url('src/assets/mbl.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
