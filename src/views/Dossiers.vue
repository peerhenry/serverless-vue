<template lang="pug">
div
  h1 Dossiers
  .dossier(v-for="d of dossiers")
    p {{ d.title }}
    p {{ d.description }}
</template>

<script>
import dossiersQuery from '@/graphql/Dossiers.gql'

export default {
  name: 'Dossiers',
  // data() {
  //   return {
  //     dossiers: [],
  //   }
  // },
  apollo: {
    dossiers: dossiersQuery,
  },
}
</script>

<style scoped lang="scss">
.dossier {
  border: 1px solid black;
  margin: 2px;
}
</style>
