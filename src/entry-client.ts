import createApp from './main';
import router from "./routes";

export const render = async () => {
    const { app } = createApp();

    await router.isReady();

    app.mount("#app");
};