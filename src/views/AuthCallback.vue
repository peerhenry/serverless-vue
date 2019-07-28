<template lang="pug">
div
  p(v-if="loggedIn") logged in
  p(v-else) loading...
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    handleLoginEvent(data) {
      this.loggedIn = true
      this.$router.push(data.state.target || '/')
    },
  },
  created() {
    this.$auth.handleAuthentication()
  },
}
</script>
