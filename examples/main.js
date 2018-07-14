import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router';
import Luxury from '../src/index';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Luxury);

Vue.config.debug = true;

const router = new VueRouter(routerConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
