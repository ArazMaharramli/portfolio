<script setup lang="ts">
import { ref } from 'vue'
import { featuredProjects, type Project } from '~/data/cv'
import { projectsContent } from '~/data/content'

const selectedProject = ref<Project | null>(null)

function openProject(project: Project) {
  selectedProject.value = project
}

function closeProject() {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="target-section">
    <div v-reveal class="page-wrap">
      <div class="eyebrow">{{ projectsContent.eyebrow }}</div>
      <h2 class="target-title mt-3">{{ projectsContent.title }}</h2>
      <p class="max-w-2xl text-sm leading-relaxed text-ink-500">{{ projectsContent.description }}</p>

      <div class="featured-list">
        <button
          v-for="project in featuredProjects"
          :key="project.name"
          type="button"
          class="featured-card"
          @click="openProject(project)"
        >
          <div class="featured-card__media">
            <img
              v-if="project.bannerPhoto || project.coverPhoto"
              :src="withBase(project.bannerPhoto || project.coverPhoto)"
              :alt="`${project.name} project preview`"
              loading="lazy"
            >
          </div>
          <div class="featured-card__body">
            <div class="featured-card__top">
              <span class="project-card__tag project-card__tag--live">{{ projectsContent.liveStatus }}</span>
              <span class="featured-card__label">Featured</span>
            </div>
            <h3 class="featured-card__title">{{ project.name }}</h3>
            <p v-if="project.subtitle" class="featured-card__subtitle">{{ project.subtitle }}</p>
            <p v-if="project.highlights?.length" class="featured-card__summary">{{ project.highlights[0] }}</p>
            <span class="featured-card__cta">{{ projectsContent.viewDetails }} ↗</span>
          </div>
        </button>
      </div>
    </div>

    <div v-if="selectedProject" class="project-modal" @click.self="closeProject">
      <div class="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button type="button" class="project-modal__close" :aria-label="projectsContent.closeDetails" @click="closeProject">
          ×
        </button>

        <img
          v-if="selectedProject.bannerPhoto || selectedProject.coverPhoto"
          :src="withBase(selectedProject.bannerPhoto || selectedProject.coverPhoto)"
          :alt="`${selectedProject.name} project preview`"
          class="project-modal__image"
        >

        <div class="project-modal__content">
          <div class="project-modal__meta">
            <span class="project-card__tag" :class="{ 'project-card__tag--live': selectedProject.live }">{{ selectedProject.live ? projectsContent.liveStatus : projectsContent.builtStatus }}</span>
            <a
              v-if="selectedProject.link"
              :href="selectedProject.link"
              target="_blank"
              rel="noopener"
              class="project-card__link"
            >
              {{ projectsContent.visitProject }}
            </a>
          </div>

          <h3 id="project-modal-title" class="project-modal__title">{{ selectedProject.name }}</h3>
          <p v-if="selectedProject.subtitle" class="project-modal__subtitle">{{ selectedProject.subtitle }}</p>

          <ul v-if="selectedProject.highlights?.length" class="project-modal__list">
            <li v-for="highlight in selectedProject.highlights" :key="highlight">{{ highlight }}</li>
          </ul>

          <div v-if="selectedProject.stack?.length" class="project-modal__stack">
            <span v-for="item in selectedProject.stack" :key="item" class="project-modal__stack-item">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
