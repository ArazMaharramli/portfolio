<script setup lang="ts">
import { profile } from '~/data/cv'
import { contactContent } from '~/data/content'
</script>

<template>
  <section id="contact" class="contact-section page-wrap" v-reveal>
    <div class="eyebrow">{{ contactContent.eyebrow }}</div>
    <h2 class="contact-title">{{ contactContent.title }}</h2>
    <div class="contact-actions">
        <a
          :href="`mailto:${profile.email}`"
          class="target-button button-dark"
          data-magnetic
        >
          <span class="btn-inner">{{ profile.email }}</span>
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener"
          class="target-button button-ghost"
        >
          {{ contactContent.linkedin }}
        </a>
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener"
          class="target-button button-ghost"
        >
          {{ contactContent.github }}
        </a>
    </div>
  </section>
</template>
