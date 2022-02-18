<template>
  <section id="app-steps">
    <!-- Steps Layout 1 -->
    <div class="px-3 flex flex-wrap text-[#718096]">
      <div class="px-4 w-full flex items-end justify-end mr-2 mt-5">
        <img
          src="~/assets/img/undraw_Profile_data_re_v81r@2x.png"
          alt="jobs step 1"
          class="w-64"
        />
      </div>
      <div class="w-1/6 z-10">
        <h3 class="text-9xl">1.</h3>
      </div>
      <div class="w-10/12 flex items-end justify-center text-lg mb-8">
        <p class="w-40">Erstellen dein Unternehmensprofil</p>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="px-8 flex flex-wrap text-[#718096] waves">
      <div class="w-1/5 z-10 flex items-end justify-center">
        <h3 class="text-9xl">2.</h3>
      </div>
      <div class="w-4/5 flex items-end justify-end text-lg mb-3">
        <p class="w-52">Erhalte Vermittlungs- angebot von Arbeitgeber</p>
      </div>
      <div class="px-4 w-full flex items-end justify-end mr-2 mb-8">
        <img
          src="~/assets/img/undraw_job_offers_kw5d.png"
          alt="jobs step 1"
          class="w-64"
        />
      </div>
      <div class="eclipse-bottom"></div>
    </div>

    <!-- Steps Layout 3 -->
    <div class="px-8 flex flex-wrap text-[#718096] mb-10">
      <div class="circle-step w-1/6 z-10">
        <h3 class="text-9xl">3.</h3>
      </div>
      <div class="w-10/12 flex items-end justify-end text-lg mb-3">
        <p class="w-52">Vermittlung nach Provision oder Stundenlohn</p>
      </div>
      <div class="px-4 w-full flex items-end justify-end mr-2 mb-8">
        <img
          src="~/assets/img/undraw_business_deal_cpi9.png"
          alt="jobs step 1"
          class="w-64"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppSteps',
}
</script>

<style lang="postcss" scoped>
#app-steps {
  @apply overflow-hidden;
  img,
  p,
  h3 {
    @apply z-10;
  }
  .waves {
    @apply relative w-full bg-[#E6FFFA] h-96;

    &:before {
      content: '';
      width: 100%;
      background: #fff;
      border-radius: 50%;
      height: 100px;
      position: absolute;
      left: -4rem;
      min-width: 250px;
      min-height: 250px;
      top: -14rem;
      margin: 0 auto;
    }
    &:after {
      content: '';
      width: 81%;
      background: #e6fffa;
      border-radius: 50%;
      height: 100px;
      position: absolute;
      right: -7rem;
      min-width: 250px;
      min-height: 250px;
      top: -1rem;
      margin: 0 auto;
    }
    .eclipse-bottom {
      width: 20rem;
      height: 9rem;
      position: absolute;
      left: 9rem;
      z-index: 0;
      bottom: -1rem;
      border-radius: 50%;
      background: #e6fffa;
    }
  }
  .circle-step {
    @apply relative;
    &:before {
      content: '';
      @apply rounded-full bg-[#F7FAFC] h-[19rem] w-[19rem] absolute flex z-[-1];
      bottom: -8rem;
      left: -6rem;
    }
  }
}
</style>
