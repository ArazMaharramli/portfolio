<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '~/data/cv'
import { navigation } from '~/data/content'

const links = [
  { href: '/#projects', label: navigation.work },
  { href: '/about', label: navigation.about },
  { href: '/contact', label: navigation.contact },
  { href: '/blog', label: navigation.blog }
]

// Only add the white veil once the page has moved, so the top of the page stays clear.
const isScrolled = ref(false)

function updateScrollState() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <header class="site-nav" :class="{ 'site-nav--scrolled': isScrolled }">
    <div class="site-nav__inner">
      <NuxtLink to="/" class="site-mark">{{ profile.name }}</NuxtLink>
      <nav class="site-nav__links">
        <a v-for="link in links" :key="link.href" :href="withBase(link.href)">{{ link.label }}</a>
      </nav>
    </div>
  </header>
</template>
