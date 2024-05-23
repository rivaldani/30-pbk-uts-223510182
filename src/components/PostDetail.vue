<template>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['post'],
  };
  </script>
  