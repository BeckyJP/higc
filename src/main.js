import './assets/main.css';
import './assets/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const app = createApp(App);

app.component('Splide', Splide);
app.component('SplideSlide', SplideSlide);

app.use(router);
app.mount('#app');
