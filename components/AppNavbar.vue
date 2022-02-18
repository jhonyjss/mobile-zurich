<template>
  <header id="navbar" class="flex h-16 items-center">
    <div class="container px-3">
      <nuxt-link class="cursor-pointer float-right" to="/">Login</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
#navbar {
  @apply shadow-lg rounded-b-2xl text-primary relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 8px;
    z-index: -1;
    background: linear-gradient(130deg, #319795, #3182ce 41.07%);
  }
}
</style>
