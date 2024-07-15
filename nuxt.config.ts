// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    privateApiUrl: 'http://localhost:4000',
    public: {
      apiUrl: 'http://localhost:4000',
    },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      title: 'Jooycar Trips',
      meta: [{ charset: 'utf-8' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-mapbox'],

  mapbox: {
    accessToken:
      'pk.eyJ1Ijoic3JncmNwIiwiYSI6ImNsbmM5NjF1NTBrZzMyam56ZjU2cXVqcmMifQ.W1dagNg4HWsXzzyxfslLhQ',
  },

  googleFonts: { families: { 'Space Grotesk': [400, 500, 600, 700] } },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
});
