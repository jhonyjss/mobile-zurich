<template>
  <ul id="app-options-register" class="px-4 flex rounded-lg sm:flex py-5">
    <li class="w-full">
      <a
        href="javascript:void(0);"
        class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >Arbeitgeber
      </a>
    </li>
    <li class="w-full">
      <a
        href="javascript:void(0);"
        class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >Temporärbüro
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppOptionsRegister',
}
</script>

<style lang="postcss" scoped>
#app-options-register {
  a {
    @apply text-primary border;
    &:active,
    &:focus {
      @apply text-[#E6FFFA] bg-[#81E6D9];
    }
  }
  li:last-child a {
    @apply rounded-r-2xl;
  }
}
</style>
