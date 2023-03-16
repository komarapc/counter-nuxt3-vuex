<template>
  <title>Counter</title>
  <div>
    <Counter :greeting="greetings" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      greetings: "Hello World",
    };
  },
};
</script>
