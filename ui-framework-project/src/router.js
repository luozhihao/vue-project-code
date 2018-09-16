import Vue from 'vue'
import Router from 'vue-router'

// demo
const Demo = (resolve => {
    require.ensure(['./views/demo/index.vue'], () => {
        resolve(require('./views/demo/index.vue'))
    })
})

// 拼图游戏
const Puzzle = (resolve => {
    require.ensure(['./views/demo/puzzle.vue'], () => {
        resolve(require('./views/demo/puzzle.vue'))
    })
})

// 计数练习
const Count = (resolve => {
    require.ensure(['./views/demo/count.vue'], () => {
        resolve(require('./views/demo/count.vue'))
    })
})

// 实验室
const Laboratory = (resolve => {
    require.ensure(['./views/laboratory/index.vue'], () => {
        resolve(require('./views/laboratory/index.vue'))
    })
})

// 二维码生成
const Qrcode = (resolve => {
    require.ensure(['./views/laboratory/qrcode.vue'], () => {
        resolve(require('./views/laboratory/qrcode.vue'))
    })
})

// QQ号码测吉凶
const QQTest = (resolve => {
    require.ensure(['./views/laboratory/qq.vue'], () => {
        resolve(require('./views/laboratory/qq.vue'))
    })
})

// 历史上的今天
const NowHistory = (resolve => {
    require.ensure(['./views/laboratory/history.vue'], () => {
        resolve(require('./views/laboratory/history.vue'))
    })
})

// 关于
const About = (resolve => {
    require.ensure(['./views/about/index.vue'], () => {
        resolve(require('./views/about/index.vue'))
    })
})

Vue.use(Router)

let base = `${process.env.BASE_URL}`

export default new Router({
    mode: 'history',
    base: base,
    routes: [
        {
            path: '/',
            name: 'demo',
            component: Demo
        },
        {
            path: '/puzzle',
            name: 'puzzle',
            component: Puzzle
        },
        {
            path: '/count',
            name: 'count',
            component: Count
        },
        {
            path: '/laboratory',
            name: 'laboratory',
            component: Laboratory
        },
        {
            path: '/qrcode',
            name: 'qrcode',
            component: Qrcode
        },
        {
            path: '/qqTest',
            name: 'qqTest',
            component: QQTest
        },
        {
            path: '/nowHistory',
            name: 'nowHistory',
            component: NowHistory
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
})

