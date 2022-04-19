import Vue from "vue";

export default {

    state: {

    },

    getters: {

    },

    actions: {
        async PRODUCT_LIST({ commit }) {
            let access_token = localStorage.getItem('accessToken');
            const headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer " + access_token,
            };
            return await axios.get('/api/product-category', { headers })
                .then(response => {
                    console.log(response.data)
                    return response.data;
                });
        },
        async CREATE_PRODUCT_CATEGORY({ commit }, data) {
            let access_token = localStorage.getItem('accessToken');
            const headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer " + access_token,
            };
            return await axios.post('/api/product-category', data, { headers })
                .then(response => {
                    return response.data;
                });
        },
    },

    mutations: {

    },
};