import Main from "@/modules/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Main,
    },
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;