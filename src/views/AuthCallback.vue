<template lang="pug">
div
  p loading...
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || '/')
    },
  },
  created() {
    this.$auth.handleAuthentication()
  },
}
</script>

<style lang="scss" scoped>
</style>