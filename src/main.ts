import { createSSRApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import vuetify from "./plugins/vuetify";
import { Vue3ProgressPlugin } from "@marcoschulte/vue3-progress";

import '#root/styles/main.scss';

export default function createApp() {
    const app = createSSRApp(App);

    app.use(router);
    app.use(vuetify);
    app.use(Vue3ProgressPlugin, { position: "fixed", height: "3px" }).provide('progress', Vue3ProgressPlugin);

    return { app };
}
