import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ],
  css: [
    'bulma'
  ],
  meta: {
    script: [
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_JAVASCRIPT_API_KEY}`
      }
    ]
  },
  privateRuntimeConfig: {
    MAPS_EMBED_API: '',
    GEOCODING_API_KEY: '',
    PLACES_API_KEY: ''
  }
})
