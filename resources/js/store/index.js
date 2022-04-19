import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';
import productCategory from './modules/product-category';

export default new Vuex.Store({
    strict: true,
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        productCategory
    },
});