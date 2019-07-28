import Vue from 'vue'
import authService from '@/auth/authService.js'

// This provides appwide access to the AuthService via this.$auth
// as well as callbacks for handleLoginEvent
Vue.use({
  install(Vue) {
    Vue.prototype.$auth = authService

    Vue.mixin({
      created() {
        if (this.handleLoginEvent) {
          authService.addListener('loginEvent', this.handleLoginEvent)
        }
      },

      destroyed() {
        if (this.handleLoginEvent) {
          authService.removeListener('loginEvent', this.handleLoginEvent)
        }
      },
    })
  },
})
