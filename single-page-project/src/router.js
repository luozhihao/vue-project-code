import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = (resolve => {
    require.ensure(['./views/Home.vue'], () => {
        resolve(require('./views/Home.vue'))
    })
})

// 关于
const About = (resolve => {
    require.ensure(['./views/About.vue'], () => {
        resolve(require('./views/About.vue'))
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
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

