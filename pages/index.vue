<template>
  <div class="main-wrapper">
    <AppHero />
    <hr />

    <section id="main-steps" class="container mx-auto mb-5 bg-white">
      <AppOptionsRegister />

      <div class="flex flex-col">
        <h2 class="text-center text-2xl text-[#4A5568] mx-5 mt-7">
          Drei einfache Schritte zur Vermittlung neuer Mitarbeiter
        </h2>
      </div>

      <AppSteps />
    </section>
  </div>
</template>

<script>
import AppSteps from '../components/AppSteps.vue'
import AppOptionsRegister from '@/components/AppOptionsRegister.vue'
import AppHero from '~/components/AppHero.vue'
export default {
  name: 'IndexPage',
  components: { AppHero, AppOptionsRegister, AppSteps },
  layout: 'default',
}
</script>
<style lang="postcss" scoped>
.main-wrapper {
  @apply p-0 bg-gradient-to-r from-[#EBF4FF] to-[#E6FFFA] h-screen max-h-screen;
}
</style>
