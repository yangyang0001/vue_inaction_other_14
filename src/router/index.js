import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRouters from '@/router/router.js'

import MyLogin from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'

import MyUsers from '@/components/menus/MyUsers.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MyGoods from '@/components/menus/MyGoods.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MySettings from '@/components/menus/MySettings.vue'

import MyUserDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: MyLogin },
        {
            path: '/home', component: MyHome, redirect: '/home/users',
            children: [
                { path: 'users', component: MyUsers },
                { path: 'rights', component: MyRights },
                { path: 'goods', component: MyGoods },
                { path: 'orders', component: MyOrders },
                { path: 'settings', component: MySettings },
                { path: 'userinfo/:id', component: MyUserDetail, props: true },
            ]
        }
    ],

});

router.beforeEach(function (to, from, next) {
    // router.js 中存放需要拦截的 hashURL 集合, 定义为 数组 all_routers
    if (LoginRouters.indexOf(to.path) != -1) {
        const token = localStorage.getItem('token');
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router
