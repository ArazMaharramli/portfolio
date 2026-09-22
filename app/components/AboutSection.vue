<script setup lang="ts">
import { profile } from '~/data/cv'
import { aboutContent } from '~/data/content'
</script>

<template>
  <section id="about" class="target-section">
    <div v-reveal class="page-wrap">
      <div class="about-intro-grid">
        <div class="about-intro">
          <div class="eyebrow">{{ aboutContent.eyebrow }}</div>
          <h2 class="about-lead">{{ aboutContent.lead }}</h2>
          <div class="about-body">
            <p>{{ profile.summary }}</p>
            <p>{{ aboutContent.secondParagraph }}</p>
          </div>
        </div>
        <aside class="about-now">
          <div class="about-now__label">{{ aboutContent.nowLabel }}</div>
          <div class="about-now__title">{{ aboutContent.nowTitle }}</div>
          <p>{{ aboutContent.nowDescription }}</p>
          <dl class="about-details">
            <div><dt>{{ aboutContent.details.basedIn }}</dt><dd>{{ profile.location }}</dd></div>
            <div><dt>{{ aboutContent.details.experience }}</dt><dd>{{ aboutContent.details.experienceValue }}</dd></div>
            <div><dt>{{ aboutContent.details.focus }}</dt><dd>{{ aboutContent.details.focusValue }}</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>
