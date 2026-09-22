<script setup lang="ts">
import { education } from '~/data/cv'
import { sectionLabels } from '~/data/content'
</script>

<template>
  <section id="education" class="target-section">
    <div v-reveal class="page-wrap">
      <div class="eyebrow">{{ sectionLabels.education }}</div>

      <ol class="mt-6 space-y-8">
        <li
          v-for="item in education"
          :key="item.degree"
          class="relative border-l-2 border-ink-200 pl-6"
        >
          <span class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent-500 bg-white" />
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h4 class="font-display text-lg font-bold text-ink-900">{{ item.degree }}</h4>
            <p class="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-600 shadow-sm">{{ item.period }}</p>
          </div>
          <p class="mt-1 text-sm font-medium text-ink-500">{{ item.institution }} &middot; {{ item.location }}</p>
          <p v-if="item.note" class="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">{{ item.note }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
