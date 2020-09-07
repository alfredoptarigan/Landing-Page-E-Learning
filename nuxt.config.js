export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.4/umd/popper.min.js'
      },
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js'
      },
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js'
      },

    ],
    link: [{
        rel: 'icon',
        type: 'image',
        href: '/Logo.svg'
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Poppins:wght@400;500;700&display=swap"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css"
      },

    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/styles.css"
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
      src: "@/plugins/aos",
      ssr: false
    },
    {
      src: "@/plugins/scroll",
      ssr: false
    },

  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
