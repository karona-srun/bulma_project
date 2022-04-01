import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
// Layouts
import FrontEnd from '../layouts/FrontEnd.vue';
import BackEnd from '../layouts/LayoutBackEnd.vue';
// Auth
import SignIn from '../views/auth/SignIn.vue';
import SignUp from '../views/auth/SignUp.vue';

import Dashboard from '../views/Dashboard.vue';

// User
import User from '../views/users/Index.vue';
import CreateUser from '../views/users/Create.vue';
import ShowUser from '../views/users/Show.vue';
import EditUser from '../views/users/Edit.vue';
 
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: FrontEnd,
        children: [
        {
            name: 'Home',
            path: '/',
            component: Home,
        },
        {
            path: '/sign-in',
            component: SignIn,
            name: 'SignIn',
        },
        {
            path: '/sign-up',
            component: SignUp,
            name: 'SignUp',
        },
        {
            path: '/about',
            component: About,
            name: 'About',
        }]
    },
    {
        path: '/dashboard',
        component: BackEnd,
        children: [
            {
                name: 'Dashboard',
                path: '/',
                component: Dashboard,
            },
            {
                name: 'User',
                path: '/users',
                component: User,
            },
            {
                name: 'CreateUser',
                path: '/create-user',
                component: CreateUser
            },
            {
                name: 'ShowUser',
                path: '/show-user/:title',
                component: ShowUser,
                props(route) {
                    return {  id: route.query.id }
                }
            },
            {
                name: 'EditUser',
                path: '/edit-user/:title',
                component: EditUser,
                props(route) {
                    return {  id: route.query.id }
                }
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
});

export default router;

