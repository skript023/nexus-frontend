import Post from "@/modules/Blog/Post.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Post,
    },
];
  
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
  
export default router;