<template lang="pug">
div
  h1 Dossiers
  .dossier(v-for="d of dossiers")
    p {{ d.title }}
    p {{ d.description }}
</template>

<script>
import getDossiers from '@/graphql/GetDossiers.gql'

export default {
  name: 'Dossiers',
  apollo: {
    dossiers: getDossiers,
  },
}
</script>

<style scoped lang="scss">
.dossier {
  border: 1px solid black;
  margin: 2px;
}
</style>
