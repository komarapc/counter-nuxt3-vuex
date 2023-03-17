<template>
  <div class="flex items-center justify-center absolute top-5 right-5">
    <button
      class="px-4 py-2 rounded text-2xl"
      @click="$store.dispatch('toggleDarkMode')"
    >
      <Icon
        name="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
        v-if="$store.state.theme.darkMode"
      />
      <Icon name="line-md:moon-alt-to-sunny-outline-loop-transition" v-else />
    </button>
  </div>
</template>
<script>
export default {
  name: "ToggleTheme",
};
</script>
