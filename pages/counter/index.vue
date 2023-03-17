<template>
  <title>{{ titlePage }}</title>
  <Counter />
</template>
<script>
export default {
  name: "CounterPage",
  data() {
    return {
      titlePage: "NuxtJS Counter",
    };
  },
};
</script>
