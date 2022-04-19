import Vue from "vue";

export default {

    state: {

    },

    getters: {

    },

    actions: {
        async logIn({ commit }, data) {
            const headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            };
            return await axios.post('/api/auth/login', data, { headers })
                .then(response => {
                    localStorage.setItem('accessToken', response.data.access_token)
                    return response.data;
                })
                .catch((error) => {
                    if (error.response) {
                        return error.response.data;
                    }
                })
        },
        async register({ commit }, data) {
            const headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            };
            return await axios.post('/api/auth/register', data, { headers })
                .then(response => {
                    return response.data;
                });
        },
        profile({ commit }, data) {
            alert(...data);
            return axios.post('/api/auth/profile', ...data)
                .then(response => {
                    console.log(response.data);
                });
        },

        async logOut({ commit }, data) {
            const headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            };
            return await axios.post('/api/auth/register', data, { headers })
                .then(response => {
                    localStorage.removeItem('accessToken')
                    return response.data;
                });
        },



    },

    mutations: {

        setCustomers(state, customers) {
            state.customers = customers;
        },
    },
};