<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { education, experience, profile, skills } from '~/data/cv'
import { aboutPageContent } from '~/data/content'

// The portrait is optional. If the file is missing we fall back to a single-column
// hero rather than showing a broken image.
const portraitEl = ref<HTMLImageElement | null>(null)
const portraitFailed = ref(false)
const showPortrait = computed(() => Boolean(profile.photo) && !portraitFailed.value)

onMounted(() => {
  // An image that 404s during SSR finishes loading before Vue attaches @error,
  // so the failure has to be detected here as well.
  const el = portraitEl.value
  if (el && el.complete && el.naturalWidth === 0) {
    portraitFailed.value = true
  }
})
</script>

<template>
  <main class="about-page">
    <section class="about-page__hero">
      <div class="page-wrap">
        <div class="eyebrow">{{ aboutPageContent.eyebrow }}</div>
        <div class="about-page__hero-grid" :class="{ 'about-page__hero-grid--solo': !showPortrait }">
          <div class="about-page__hero-copy">
            <h1 class="about-page__title">{{ aboutPageContent.titleBefore }} <em>{{ aboutPageContent.titleEmphasis }}</em>{{ aboutPageContent.titleAfter }}</h1>
            <div class="about-page__intro">
              <p>{{ profile.summary }}</p>
              <p>{{ aboutPageContent.introSecondParagraph }}</p>
              <a :href="withBase('/contact')" class="target-button button-dark">{{ aboutPageContent.contactCta }}</a>
            </div>
          </div>

          <div v-if="showPortrait" class="about-page__portrait-frame">
            <figure class="about-page__portrait">
              <img
                ref="portraitEl"
                :src="withBase(profile.photo)"
                :alt="profile.photoAlt"
                width="720"
                height="900"
                fetchpriority="high"
                @error="portraitFailed = true"
              >
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="about-page__metrics page-wrap" aria-label="Career highlights">
      <div v-for="metric in aboutPageContent.metrics" :key="metric.label" class="about-page__metric">
        <strong>{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
      </div>
    </section>

    <section class="about-page__section page-wrap">
      <div class="about-page__section-heading">
        <div>
          <div class="eyebrow">{{ aboutPageContent.workingStyle.eyebrow }}</div>
          <h2 class="target-title">{{ aboutPageContent.workingStyle.title }}</h2>
        </div>
        <p>{{ aboutPageContent.workingStyle.description }}</p>
      </div>

      <div class="about-page__strengths">
        <article v-for="strength in aboutPageContent.strengths" :key="strength.number" class="about-page__strength">
          <span>{{ strength.number }}</span>
          <h3>{{ strength.title }}</h3>
          <p>{{ strength.text }}</p>
        </article>
      </div>
    </section>

    <section class="about-page__section about-page__section--dark">
      <div class="page-wrap">
        <div class="about-page__section-heading">
          <div>
            <div class="eyebrow">{{ aboutPageContent.technicalRange.eyebrow }}</div>
            <h2 class="target-title">{{ aboutPageContent.technicalRange.title }}</h2>
          </div>
          <p>{{ aboutPageContent.technicalRange.description }}</p>
        </div>

        <div class="about-page__skills">
          <div v-for="skill in skills" :key="skill.category" class="about-page__skill">
            <h3>{{ skill.category }}</h3>
            <p>{{ skill.items.join(' · ') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-page__section page-wrap">
      <div class="eyebrow">{{ aboutPageContent.impact.eyebrow }}</div>
      <h2 class="target-title about-page__impact-title">{{ aboutPageContent.impact.title }}</h2>

      <div class="about-page__career">
        <article v-for="role in experience" :key="role.company" class="about-page__role">
          <div class="about-page__role-heading">
            <div>
              <h3>{{ role.company }}</h3>
              <p>{{ role.title }}</p>
            </div>
            <span>{{ role.period }}</span>
          </div>
          <p class="about-page__role-description">{{ role.description }}</p>
          <ul>
            <li v-for="project in role.projects.slice(0, 4)" :key="project.subtitle">
              <strong>{{ project.subtitle }}</strong>
              <span>{{ project.highlights[0] }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="about-page__section about-page__education page-wrap">
      <div>
        <div class="eyebrow">{{ aboutPageContent.education.eyebrow }}</div>
        <h2 class="target-title">{{ aboutPageContent.education.title }}</h2>
      </div>
      <div class="about-page__education-list">
        <article v-for="entry in education" :key="entry.degree">
          <span>{{ entry.period }}</span>
          <h3>{{ entry.degree }}</h3>
          <p>{{ entry.institution }} · {{ entry.location }}</p>
        </article>
      </div>
    </section>

    <ContactSection />
  </main>
</template>