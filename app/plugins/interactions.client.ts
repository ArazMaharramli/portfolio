export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (reduced) return

    if (!finePointer) return

    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((button) => {
      const inner = button.querySelector<HTMLElement>('.btn-inner') || button
      button.addEventListener('mousemove', (event) => {
        const bounds = button.getBoundingClientRect()
        const x = event.clientX - bounds.left - bounds.width / 2
        const y = event.clientY - bounds.top - bounds.height / 2
        inner.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`
      })
      button.addEventListener('mouseleave', () => {
        inner.style.transform = 'translate(0, 0)'
      })
    })

    document.querySelectorAll<HTMLElement>('.tilt').forEach((card) => {
      const inner = card.querySelector<HTMLElement>('.card-inner') || card
      card.addEventListener('mousemove', (event) => {
        const bounds = card.getBoundingClientRect()
        const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5
        const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5
        inner.style.transform = `translateZ(0) rotateY(${relativeX * 5}deg) rotateX(${relativeY * -5}deg)`
      })
      card.addEventListener('mouseleave', () => {
        inner.style.transform = 'translateZ(0) rotateY(0) rotateX(0)'
      })
    })
  })
})