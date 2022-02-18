<template>
  <div id="app">
    <AppNavbar />
    <nuxt-child />
  </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue'
export default {
  name: 'AppLayout',
  components: { AppNavbar },
}
</script>

<style lang="postcss">
body {
  font-family: 'Lato', 'Courier New', Courier, monospace;
}
</style>
