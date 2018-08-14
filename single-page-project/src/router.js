import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'

// 用车提示页
const Home = (resolve => {
    require.ensure(['./views/Home.vue'], () => {
        resolve(require('./views/Home.vue'))
    })
})

// 用车提示页
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

