import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import App from './App.vue';
import store from './store';
import plugin from './plugins/plugin';

const app = createApp(App);

app.use(plugin);
app.use(VueLazyLoad, {});

app.config.globalProperties.$filters = {
  durationAndRelease(duration = 'Some ', year = 'Some ') {
    return `${year}year ${duration}min`;
  },
};

app.use(store);
app.mount('#app');
