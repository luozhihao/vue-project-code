import Vue from 'vue'
import App from './page2.vue'
import router from './router'
import store from '@/store/'
import { Navigator } from '../../common'

Vue.config.productionTip = false

// 如果是非线上环境，不加载 VConsole
if (process.env.NODE_ENV !== 'production') {
    var VConsole = require('vconsole/dist/vconsole.min.js')
    var vConsole = new VConsole()

    Vue.config.performance = true
}

Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
