<template>
  <section id="app-hero">
    <h1>Deine Job Website</h1>
    <!-- Image hands -->
    <div class="w-full">
      <img
        class="hero-img object-fit"
        src="~/assets/img/undraw_agreement_aajr.png"
        alt="job search"
      />
    </div>
    <!-- Card Layer -->
    <div id="card-layer" class="flex flex-col justify-center items-center">
      <nuxt-link to="/">Kostenlos Registrieren</nuxt-link>
    </div>
    <hr />
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
#app-hero {
  h1 {
    @apply text-5xl text-center p-8 leading-tight text-[#2D3748];
  }
  #card-layer {
    @apply container mx-auto px-4 h-32 rounded-t-2xl shadow-2xl bg-white z-20;
    box-shadow: 0px -6px 5px -7px #2d3748;
    a.nuxt-link-exact-active {
      @apply bg-gradient-to-r from-primary to-secondary  text-[#EBF4FF] px-20 py-3 text-center rounded-xl cursor-pointer mb-7;
    }
  }
}
</style>
