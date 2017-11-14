/**
 * Created by Veket on 2017/9/21.
 */
import VueRouter from 'vue-router';

import Home from '../Home/main.vue';

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
        component:(resolve)=>{require(['../Login/main.vue'],resolve)}
    },
    {
        path: '/register',
        name:'register',
        component:(resolve)=>{require(['../Register/main.vue'],resolve)}
    }

];

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routesMap
});



export default router;