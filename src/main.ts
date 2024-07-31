import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify';
import App from '@/App.vue';

import '@/styles/main.scss';

const app = createApp(App);

app.use(vuetify);

app.mount('#app');
