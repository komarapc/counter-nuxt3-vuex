// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // buildModules: ["@nuxtjs/vuex"],
  modules: ["nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
});
