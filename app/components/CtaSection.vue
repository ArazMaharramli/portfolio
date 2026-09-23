<script setup lang="ts">
import { ctaContent } from '~/data/content'
</script>

<template>
  <section class="cta-band">
    <div v-reveal class="page-wrap">
      <div class="eyebrow">{{ ctaContent.eyebrow }}</div>
      <h2 class="cta-band__title">{{ ctaContent.title }}</h2>
      <p class="cta-band__text">{{ ctaContent.text }}</p>
      <a :href="withBase('/contact')" class="target-button cta-band__button" data-magnetic>
        <span class="btn-inner">{{ ctaContent.button }}</span>
      </a>
    </div>
  </section>
</template>
