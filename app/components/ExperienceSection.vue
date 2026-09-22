<script setup lang="ts">
import { experience } from '~/data/cv'
import { sectionLabels } from '~/data/content'
</script>

<template>
  <section id="experience" class="target-section">
    <div v-reveal class="page-wrap">
      <div class="eyebrow">{{ sectionLabels.experience }}</div>

      <div v-for="role in experience" :key="role.company" class="experience-role">
        <div class="experience-role__header">
          <div>
            <h3>{{ role.title }}</h3>
            <p>{{ role.company }} &middot; {{ role.location }}</p>
          </div>
          <p class="experience-role__period">{{ role.period }}</p>
        </div>
        <p class="experience-role__description">{{ role.description }}</p>

        <div class="project-grid">
          <ProjectCard
            v-for="project in role.projects"
            :key="project.name + project.subtitle"
            :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>
