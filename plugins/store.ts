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
  },
  actions: {
    increment(context, payload: number) {
      context.commit("increment", payload);
    },
    decrement(context, payload: number) {
      context.commit("decrement", payload);
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
