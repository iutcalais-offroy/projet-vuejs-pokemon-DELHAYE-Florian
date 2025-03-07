import {createApp} from 'vue';
import {createPinia} from 'pinia';
import NaiveUI from 'naive-ui';
import App from './App.vue';
import {router} from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(NaiveUI);
app.use(pinia);
app.use(router)
app.mount('#app');
