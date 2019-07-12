import Vue from 'vue'
import App from './App.vue'
import router from './setup/router.js'
import store from './setup/store.js'
import './setup/auth.js'
import './setup/logging.js'
import './setup/registerGlobalComponents.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
