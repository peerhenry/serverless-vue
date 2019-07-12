<template lang="pug">
input(:value="value" v-bind="$attrs" v-on="{...$listeners, input: update}")
</template>

<script>
export default {
  name: 'MyInput',
  inheritAttrs: false,
  props: {
    value: [String, Number],
  },
  methods: {
    update(event) {
      this.$emit('input', event.target.value.trim())
    },
  },
}
</script>

<style scoped lang="scss">
input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-left: 1em;
}
</style>
