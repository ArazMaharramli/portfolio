<script setup lang="ts">
import { profile } from '~/data/cv'
import { heroContent } from '~/data/content'

const firstName = profile.name.split(' ')[0]

</script>

<template>
  <section class="hero-section">
    <div v-reveal class="page-wrap hero-content">
      <div class="eyebrow">{{ profile.headline }} • {{ heroContent.eyebrowSuffix }}</div>
      <h1 class="hero-title">{{ heroContent.titleBefore }} <em>{{ heroContent.titleEmphasis }}</em> {{ heroContent.titleAfter }}</h1>
      <p class="hero-subtitle">{{ heroContent.subtitle }}</p>
      <div class="hero-actions">
        <a :href="withBase('/about')" class="target-button button-dark" data-magnetic><span class="btn-inner">{{ heroContent.aboutmeCta }}</span></a>
        <a :href="withBase('/contact')" class="target-button button-ghost" data-magnetic><span class="btn-inner">{{ heroContent.contactCta }}</span></a>
      </div>
    </div>
  </section>
</template>
