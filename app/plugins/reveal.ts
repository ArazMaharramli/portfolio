export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      el.classList.add('reveal')

      if (!observer) {
        el.classList.add('in-view')
        return
      }

      observer.observe(el)
      // Safety net: guarantee content becomes visible even if the
      // intersection callback never fires (fast layout changes, tab
      // throttling, etc.) — the fade is a nice-to-have, not a gate.
      setTimeout(() => {
        el.classList.add('in-view')
        observer?.unobserve(el)
      }, 2000)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    }
  })
})
