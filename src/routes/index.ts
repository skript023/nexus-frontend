
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/modules/Post/Post.vue'),
    },
    {
        path: '/post/:slug',
        name: 'Read More',
        component: () => import('@/modules/Post/action/PostDetail.vue'),
    },
];
  
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
  
export default router;