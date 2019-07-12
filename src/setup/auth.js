import Vue from 'vue'
import AuthPlugin from '@/plugins/auth.js'

// This provides appwide access to the AuthService via this.$auth
// as well as callbacks for handleLoginEvent
Vue.use(AuthPlugin)
