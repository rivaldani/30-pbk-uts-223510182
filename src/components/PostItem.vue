<template>
    <li>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <button @click="showDetail">Show Details</button>
    </li>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    post: Object
  })
  
  const emit = defineEmits(['show-detail'])
  
  const showDetail = () => {
    emit('show-detail', props.post)
  }
  </script>
  
  <style scoped>
  li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ccc;
  }
  button {
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #2c3e50;
  }
  </style>
  