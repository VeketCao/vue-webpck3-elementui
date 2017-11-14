/**
 * Created by Veket on 2017/9/21.
 */
import VueRouter from 'vue-router';

import Home from '../Home/main.vue';
import Login from '../Login/main.vue';
import Register from '../Register/main.vue';

Vue.use(VueRouter);

const routesMap = [
    {
        path: '/',redirect:'/home',
    },
    {
        path: '/home',
        name:'home',
        component:Home
    },
    {
        path: '/trade',
        name:'trade',
        component:(resolve)=>{require(['../Trade/main.vue'],resolve)}
    },
    {
        path: '/finance',
        name:'finance',
        component:(resolve)=>{require(['../Finance/main.vue'],resolve)}
    },
    {
        path: '/security',
        name:'security',
        component:(resolve)=>{require(['../Security/main.vue'],resolve)}
    },
    {
        path: '/login',
        name:'login',
        component:Login
    },
    {
        path: '/register',
        name:'register',
        component:Register
    }

];

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routesMap
});

router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    next();

});



export default router;