import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {createBootstrap} from 'bootstrap-vue-next';
import App from '@/App.vue';
import router from '@/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';


createApp(App).use(createBootstrap()).use(createPinia()).use(router).mount('#app')
