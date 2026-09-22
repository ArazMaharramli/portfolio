<script setup lang="ts">
import { skills } from '~/data/cv'

const items = skills.flatMap((group) => group.items)
const tickerItems = [...items, ...items]
</script>

<template>
  <div class="relative -rotate-1 overflow-hidden bg-accent-500 py-3 shadow-lg shadow-accent-900/20">
    <div class="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
      <span
        v-for="(item, i) in tickerItems"
        :key="i"
        class="flex items-center gap-10 whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide text-white"
      >
        {{ item }}
        <span aria-hidden="true" class="text-white/50">&bull;</span>
      </span>
    </div>
  </div>
</template>
