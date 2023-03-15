import { App, Plugin } from 'vue';
import CustomFooter from '../components/footer/Footer.vue';

const plugin:Plugin = {
  install: (app:App) => {
    app.component('global-footer', CustomFooter);
  },
};

export default plugin;
