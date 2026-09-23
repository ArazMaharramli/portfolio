<script setup lang="ts">
import type { Project } from '~/data/cv'
import { projectsContent } from '~/data/content'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (event: 'open', project: Project): void
}>()

function openProject() {
  emit('open', props.project)
}
</script>

<template>
  <button type="button" class="project-card tilt" @click="openProject">
    <div class="card-inner">
      <div class="project-card__badges">
        <span class="project-card__tag" :class="{ 'project-card__tag--live': project.live }">
          {{ project.live ? projectsContent.liveStatus : projectsContent.builtStatus }}
        </span>
      </div>

      <div class="project-card__media">
        <img
          v-if="project.coverPhoto"
          class="project-card__image"
          :src="withBase(project.coverPhoto)"
          :alt="`${project.name} project preview`"
          loading="lazy"
        >
        <div v-else class="project-card__image project-card__image--placeholder" aria-hidden="true" />

        <div class="project-card__overlay">
          <span class="project-card__overlay-title">{{ project.name }}</span>
          <span class="project-card__overlay-cta">{{ projectsContent.viewDetails }}</span>
        </div>
      </div>
    </div>
  </button>
</template>
