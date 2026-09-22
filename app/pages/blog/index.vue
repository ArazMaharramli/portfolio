<script setup lang="ts">
import { blogContent } from '~/data/content'
</script>

<template>
  <main class="min-h-[60vh] bg-white">
    <section>
      <div class="mx-auto max-w-content px-6 py-20">
        <p class="section-heading mb-3">{{ blogContent.eyebrow }}</p>
        <h1 class="font-display text-3xl font-extrabold text-ink-900 md:text-4xl">{{ blogContent.title }}</h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">{{ blogContent.description }} {{ blogContent.comingSoon }}</p>

        <ul class="mt-10 divide-y divide-ink-100 border-t border-ink-100">
          <li v-for="note in blogContent.notes" :key="note.title" class="flex items-center justify-between gap-4 py-4">
            <span class="text-sm font-medium text-ink-600">{{ note.title }}</span>
            <span class="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-700">{{ note.status }}</span>
          </li>
        </ul>

        <NuxtLink to="/" class="mt-10 inline-block text-sm font-semibold text-accent-600 link-underline">
          {{ blogContent.backToPortfolio }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
