<template>
    <div>
      <h1>Albums</h1>
      <div v-for="album in albums" :key="album.id">
        <router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Albums',
    setup() {
      const albums = ref([]);
  
      onMounted(async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/albums');
          if (response.ok) {
            albums.value = await response.json();
          } else {
            console.error('Failed to fetch albums');
          }
        } catch (error) {
          console.error('Error fetching albums:', error);
        }
      });
  
      return {
        albums,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles for Albums.vue here */
  </style>
  