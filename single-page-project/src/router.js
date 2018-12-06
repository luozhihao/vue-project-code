import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName:'home'*/ './views/Home.vue');
const About = () => import(/* webpackChunkName:'about'*/ './views/About.vue');

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

