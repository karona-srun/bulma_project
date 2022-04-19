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
import ConfirmAccount from '../views/auth/confirmAccount.vue';

import Dashboard from '../views/Dashboard.vue';

// User
import User from '../views/users/Index.vue';
import CreateUser from '../views/users/Create.vue';
import ShowUser from '../views/users/Show.vue';
import EditUser from '../views/users/Edit.vue';

// Product Category
import ProductCategory from '../views/productCategory/Index.vue';
import CreateProductCategory from '../views/productCategory/Create.vue';
import EditProductCategory from '../views/productCategory/Edit.vue';
import ShowProductCategory from '../views/productCategory/Show.vue';
 
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
            path: '/login',
            component: SignIn,
            name: 'logIn',
        },
        {
            path: '/register/activate',
            component: ConfirmAccount,
            name: 'ConfirmAccount',
        },
        {
            path: '/register',
            component: SignUp,
            name: 'Register',
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
            },
            {
                name: 'ProductCategory',
                path: '/product-category',
                component: ProductCategory,
            },
            {
                name: 'CreateProductCategory',
                path: '/create-product-category',
                component: CreateProductCategory
            },
            {
                name: 'EditProductCategory',
                path: '/edit-product-category',
                component: EditProductCategory
            },
            {
                name: 'ShowProductCategory',
                path: '/show-product-category/:id',
                component: ShowProductCategory,
            },
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
    scrollBehavior: (to, from, savedPosition)  => {
        if (to.hash) {
          return {selector: to.hash}
        } else {
          return {x: 0, y: 0}
        }
      },
    linkActiveClass: 'active',
});

export default router;

