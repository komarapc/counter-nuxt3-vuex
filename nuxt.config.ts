// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/vuex"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
});
