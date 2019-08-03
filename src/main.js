import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './setup/store.js'
import './setup/auth.js'
import './setup/logging.js'
import './setup/registerGlobalComponents.js'
import apolloProvider from './setup/apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
