
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/modules/Post/Post.vue'),
    },
];
  
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
  
export default router;