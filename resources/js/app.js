require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

 const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
