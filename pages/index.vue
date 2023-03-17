<template>
  <title>{{ titlePage }}</title>
  <div
    class="flex flex-col w-full min-h-screen items-center justify-center transition duration-300 ease-in-out"
    :class="
      $store.state.theme.darkMode
        ? 'bg-gray-900 text-neutral-300'
        : 'bg-blue-50'
    "
  >
    <ToggleTheme />
    <div class="flex flex-row text-6xl space-x-5">
      <span class="font-bold text-emerald-500"
        >Nuxt<span class="font-bold text-orange-500">JS</span></span
      >
      <span>Counter</span>
    </div>
    <div class="my-5">
      <NuxtLink to="/counter">
        <button
          class="px-4 py-2 rounded text-white text-lg"
          :class="
            $store.state.theme.darkMode
              ? 'bg-gray-700'
              : 'bg-blue-100 text-neutral-800'
          "
        >
          See Counter
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      titlePage: "NuxtJS Counter",
    };
  },
};
</script>
