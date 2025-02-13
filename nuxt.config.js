export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/kodeinaja/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KodeInaja - Belajar koding dari dasar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Belajar koding atau pemrograman dari dasar' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kodeinaja/favicon.ico' },
      { rel: 'stylesheet', href: '/kodeinaja/easymde/src/css/easymde.min.css' }
    ],
    script: [
      { src: '/kodeinaja/easymde/src/js/easymde.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/infinite-scroll.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-okaidia.min.css'
      }
    },
    nestedProperties: ['categories.slug']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
