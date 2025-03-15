import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import NaiveUI from 'naive-ui';
import { router } from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(NaiveUI);
app.use(pinia);
app.use(router);
app.mount('#app');
