import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify';
import App from '@/App.vue';

import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';
import router from './routes';

import '@/styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(Vue3ProgressPlugin, { position: "fixed", height: "3px" }).provide('progress', Vue3ProgressPlugin);

app.mount('#app');
