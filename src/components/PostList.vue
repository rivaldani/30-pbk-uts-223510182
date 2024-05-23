<template>
    <div>
      <h2>Post List</h2>
      <button @click="fetchPosts" v-if="!posts.length">Load Posts</button>
      <ul>
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @show-detail="showDetail"
        />
      </ul>
      <slot name="extra-content"></slot>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import PostItem from './PostItem.vue';
  
  export default {
    components: {
      PostItem,
    },
    data() {
      return {
        posts: [],
      };
    },
    methods: {
      async fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      },
      showDetail(post) {
        this.$emit('show-detail', post);
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  button {
    margin-bottom: 1rem;
  }
  </style>
  