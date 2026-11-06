// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Anderson Stocloski | Advogado em Três Barras/SC',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Anderson Stocloski, advogado inscrito na OAB/SC 23.841. Atuação nas áreas trabalhista, criminal, previdenciária, família e cível em Três Barras/SC e região.'
        },
        { name: 'theme-color', content: '#1c1c1c' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Poppins:wght@300;400;500;600&display=swap'
        }
      ]
    }
  }
})
