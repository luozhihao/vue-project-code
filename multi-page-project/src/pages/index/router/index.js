import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = (resolve => {
    require.ensure(['../views/home.vue'], () => {
        resolve(require('../views/home.vue'))
    })
})

Vue.use(Router)

let base = `${process.env.BASE_URL}`

let router = new Router({
    mode: 'history',
    base: base,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: '首页' }
        },
    ]
})

router.beforeEach((to, from, next) => {
    let title = to.meta && to.meta.title
    
    if (title) {
        document.title = title // 设置页面 title
    }
    
    /*if (to.name === 'home') {
    
        // 拦截并跳转至 page2 单页
        Vue.$openRouter({
            name: 'page2'
        });
    }*/
    
    next()
})

export default router
