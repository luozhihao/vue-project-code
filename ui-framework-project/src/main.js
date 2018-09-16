import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './assets/iconfont/iconfont.css'

// 如果是非线上环境，不加载 VConsole
if (process.env.NODE_ENV !== 'production') {
    /*var VConsole = require('vconsole/dist/vconsole.min.js')
    var vConsole = new VConsole()*/

    Vue.config.performance = true;
}

// 添加 Fastclick 移除移动端点击延迟
const FastClick = require('fastclick')

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
