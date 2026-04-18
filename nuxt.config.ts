export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  $development: {
    devtools: { enabled: true }
  },

  $production: {
    devtools: { enabled: false }
  },

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'True and the rainbow kingdom'
    }
  }
});