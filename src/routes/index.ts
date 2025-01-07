
import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('#root/pages/index.page.vue'),
    },
    {
        path: '/post/:slug',
        name: 'Read More',
        component: () => import('#root/pages/Post/[slug].vue'),
    },
];
  
const history = typeof window !== 'undefined'
    ? createWebHistory(import.meta.env.BASE_URL)  // Use WebHistory in the browser
    : createMemoryHistory();  // Use MemoryHistory for SSR

const router = createRouter({
    history, // Provide the appropriate history
    routes,
});

export default router;