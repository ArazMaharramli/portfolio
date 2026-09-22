<script setup lang="ts">
import { servicesContent } from '~/data/content'
</script>

<template>
  <section class="services-section">
    <div v-reveal class="page-wrap services-layout">
      <div class="services-intro">
        <div class="eyebrow">{{ servicesContent.eyebrow }}</div>
        <h2 class="services-intro__title">{{ servicesContent.title }}</h2>
      </div>

      <div class="services-list">
        <article
          v-for="service in servicesContent.items"
          :key="service.number"
          class="service-row"
        >
          <span class="service-row__number">{{ service.number }}</span>
          <div class="service-row__body">
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
