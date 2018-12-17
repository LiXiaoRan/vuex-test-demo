import Vue from 'vue'
import App from './App'

import store from './store/store' // 导入store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 根组件注入store
  components: { App },
  template: '<App/>'
})
