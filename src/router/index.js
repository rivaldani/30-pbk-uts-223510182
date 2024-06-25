import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../views/Todos.vue';
import Posts from '../views/Posts.vue';
import Albums from '../views/Albums.vue';
import AlbumDetails from '../views/AlbumDetails.vue';

const routes = [
  { path: '/', component: Todos },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: AlbumDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
