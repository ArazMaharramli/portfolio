// https://nuxt.com/docs/api/configuration/nuxt-config
const googleFontsHref =
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://arazsolutions.com',
    name: 'Araz Solutions'
  },
  app: {
    head: {
      title: 'I\'m Araz | Software Engineer',
      meta: [
        { name: 'description', content: 'Backend-focused Software Engineer specializing in .NET, distributed systems, and enterprise integrations.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'I\'m Araz | Software Engineer' },
        { property: 'og:description', content: 'Backend-focused Software Engineer specializing in .NET, distributed systems, and enterprise integrations.' },
        { property: 'og:url', content: 'https://arazsolutions.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'I\'m Araz | Software Engineer' },
        { name: 'twitter:description', content: 'Backend-focused Software Engineer specializing in .NET, distributed systems, and enterprise integrations.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://arazsolutions.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          // Off the critical path: "print" is non-render-blocking, then onload flips it to "all".
          // Fallback text paints immediately with the metric-matched fallback in main.css.
          rel: 'stylesheet',
          href: googleFontsHref,
          media: 'print',
          onload: "this.media='all'"
        }
      ],
      noscript: [
        { innerHTML: `<style>.reveal { opacity: 1 !important; transform: none !important; }</style><link rel="stylesheet" href="${googleFontsHref}">` }
      ]
    }
  }
})
