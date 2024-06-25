<template>
    <div>
      <h1>Album Details</h1>
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'AlbumDetails',
    setup() {
      const route = useRoute();
      const photos = ref([]);
  
      onMounted(async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${route.params.id}/photos`);
          if (response.ok) {
            photos.value = await response.json();
          } else {
            console.error('Failed to fetch photos');
          }
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      });
  
      return {
        photos,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles for AlbumDetails.vue here */
  </style>
  