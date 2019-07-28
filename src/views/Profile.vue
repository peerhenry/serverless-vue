<template lang="pug">
div(v-if="profile")
  div
    div
      img(src="profile.picture")
    div
      h2 {{ profile.name }}
      p {{ profile.email }}
  .profile-json
    pre {{ JSON.stringify(profile, null, 2) }}
  div
    label What brand of car did you last drive?
    MyInput(placeholder="car brand")
div(v-else)
  p Profile not found. Please log in.
</template>

<script>
export default {
  data() {
    return {
      profile: this.$auth.profile,
    }
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile
    },
  },
}
</script>

<style scoped lang="scss">
.profile-json {
  display: none;
}
</style>
