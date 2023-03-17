import { ActionContext } from "vuex";

interface ThemeState {
  darkMode: boolean;
}
const theme = {
  state: () => {
    return {
      darkMode: false,
    };
  },
  mutations: {
    toggleDarkMode(state: ThemeState) {
      state.darkMode = !state.darkMode;
      console.log("darkMode: ", state.darkMode);
    },
  },
  actions: {
    toggleDarkMode(context: ActionContext<any, any>) {
      context.commit("toggleDarkMode");
    },
  },
  modules: {},
  getters: {},
};

export default theme;
