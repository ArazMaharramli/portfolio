<script setup lang="ts">
import { profile } from '~/data/cv'
import { footerContent } from '~/data/content'
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner page-wrap">
      <p>&copy; {{ new Date().getFullYear() }} {{ profile.name }}</p>
      <p>{{ footerContent.builtWith }}</p>
    </div>
  </footer>
</template>
