import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload: number) {
      state.counter += Number(payload);
    },
    decrement(state, payload: number) {
      state.counter -= Number(payload);
    },
    resetCounter(state) {
      state.counter = 0;
    },
  },
  actions: {
    increment(context, payload: number) {
      context.commit("increment", payload);
    },
    decrement(context, payload: number) {
      context.commit("decrement", payload);
    },
    resetCounter(context) {
      context.commit("resetCounter");
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
