import Vue from 'vue'
import Router from 'vue-router'
import storage from './util/storage'
import NProgress from 'nprogress'    //Progress进度条
import 'nprogress/nprogress.css'     //Progress进度条样式

Vue.use(Router);

const router = new Router({
    mode: 'history',  //去除#

    routes: [
        {
            path: '/',
            redirect: '/login'
        },

        {
            path: '/',
            redirect: '/home',
            meta: { require: true },
            component: () => import('./pages/layout'),
            children: [
                {
                    path: '/home',
                    name: '后台首页',
                    icon: 'el-icon-menu',
                    meta: { require: true },
                    component: () => import('./components/home/home')
                },
                {
                    path: '/base',
                    name: '基础组件',
                    icon: 'el-icon-search',
                    meta: { require: true },
                    redirect: '/base/form',
                    component: {render (c) { return c('router-view') }},
                    children: [
                        {
                            path: '/base/form',
                            name: '表单',
                            meta: { require: true},
                            component: () => import('./components/base/form')
                        },
                        {
                            path: '/base/table',
                            name: '表格',
                            meta: { require: true },
                            component: () => import('./components/base/table')
                        },
                        {
                            path: '/base/file',
                            name: '文件上传',
                            meta: { require: true },
                            component: () => import('./components/base/file')
                        }
                    ]
                },
                {
                    path: '/echarts',
                    name: 'Echarts',
                    icon: 'el-icon-time',
                    meta: { require: true },
                    redirect: '/echarts/pie',
                    component: {render (c) { return c('router-view') }}, 
                    children:[
                        {
                            path: '/echarts/line',
                            name: '折线图',
                            meta: { require: true },
                            component: () => import('./components/echarts/line')
                        },
                        {
                            path: '/echarts/bar',
                            name: '柱状图',
                            meta: { require: true },
                            component: () => import('./components/echarts/bar')
                        }
                    ]
                },
                {
                    path: '/editor',
                    name: 'Editor',
                    icon: 'el-icon-bell',
                    redirect: '/editor/mavoneditor',
                    meta: { require: true },
                    component: { render(c) { return c('router-view') } }, 
                    children: [
                        {
                            path: '/editor/mavoneditor',
                            name: 'MavonEditor',
                            meta: { require: true },
                            component: () => import('./components/editor/mavoneditor')
                        }
                    ]
                }
            ]
        },
        
        {
            path: '/login',
            component: () => import('./pages/login')
        },

        //404
        {
            path: "*",
            hidden: true,
            component: () => import('./components/error/404')
        }
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start() //开启Progress
    // 判断是否需要登陆权限
    if (to.matched.some(res => res.meta.require)) {
        if (storage.getItem("adminUser")) {
            next();
        } else {
            // 没登陆则跳转到登陆页面
            next({ path:"login" });
        }
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done() //结束Progress
});

export default router;