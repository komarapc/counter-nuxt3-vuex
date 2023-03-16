<template>
  <div
    class="w-full min-h-screen flex flex-col items-center justify-center bg-blue-50"
  >
    <div class="flex flex-col gap-4 items-center">
      <span class="text-6xl">
        <span class="text-emerald-500 font-bold">NuxtJS</span> +
        <span class="text-emerald-500">Vuex</span> +
        <span class="text-blue-400">TailwindCSS</span>
      </span>
      <span class="text-4xl font-light">Counter</span>
    </div>
    <span
      class="my-10 text-8xl font-light"
      :class="
        $store.state.counter < 0
          ? 'text-red-500'
          : $store.state.counter > 1000
          ? 'text-emerald-500'
          : ''
      "
      >{{ $store.state.counter }}</span
    >
    <div class="flex items-center justify-center gap-2">
      <button
        class="px-4 py-2 rounded bg-emerald-500 text-white text-lg"
        @click="$store.dispatch('decrement', limit)"
      >
        -
      </button>
      <button
        class="px-4 py-2 rounded bg-emerald-500 text-white text-lg"
        @click="$store.dispatch('increment', limit)"
      >
        +
      </button>
      <button
        class="px-4 py-2 rounded bg-orange-500 text-white text-lg"
        @click="$store.dispatch('resetCounter')"
      >
        Reset
      </button>
    </div>
    <div class="flex flex-col items-center my-5">
      <span class="text-lg">Add/Substract as</span>
      <input
        type="number"
        v-model="limit"
        class="w-full h-10 text-center text-neutral-500 border border-neutral-300 outline-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 1,
    };
  },
  props: {
    greeting: {
      type: String,
      required: false,
    },
  },
  mounted() {
    console.log(this.greeting);
  },
};
</script>
