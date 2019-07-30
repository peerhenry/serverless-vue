<template lang="pug">
div
  h1 People
  h4(v-for="person in people") {{ person.fullName }}
</template>

<script>
export default {
  data() {
    return {
      people: [],
    }
  },
  async created() {
    const baseUrl = process.env.VUE_APP_NETLIFY
    const url = `${baseUrl}/getpeople`
    await (await fetch(url)).json().then(data => {
      this.people = data
    })
  },
}
</script>

<style scoped lang="scss"></style>
