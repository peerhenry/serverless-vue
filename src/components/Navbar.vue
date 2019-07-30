<template lang="pug">
#nav
  router-link(to="/") Home
  router-link(to="/about") About
  router-link(v-if="isLoggedIn" to="/dossiers") Dossiers
  router-link(v-if="isLoggedIn" to="/people") People
  router-link(v-if="isLoggedIn" to="/profile") Profile
  a(v-if="!isLoggedIn" href="#" @click.prevent="login") Login
  a(v-if="isLoggedIn" href="#" @click.prevent="logout") Log out
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isLoggedIn: false,
    }
  },

  methods: {
    login() {
      this.$log.debug('calling login on auth service')
      this.$auth.login()
    },
    logout() {
      this.$log.debug('calling log out on auth service')
      this.$auth.logOut()
    },
    handleLoginEvent(data) {
      this.isLoggedIn = data.loggedIn
      this.profile = data.profile
    },
  },

  async created() {
    try {
      await this.$auth.renewTokens()
    } catch (e) {
      this.$log.debug(e)
    }
  },
}
</script>

<style lang="stylus">
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;

  a {
    margin: 0.5em;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
