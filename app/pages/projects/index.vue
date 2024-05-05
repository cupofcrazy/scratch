<template>
  <div>
    <h1>Projects</h1>
    <ul class="projects">
      <li class="project-item" v-for="project in projects" :key="project._id">
        <NuxtLink :to="`/projects/${project.slug.current}`">
          <div class="project-item__cover">
            <CommonImage v-if="project?.cover" :src="$urlFor(project?.cover).url()"
              :aspect-ratio="project?.cover.metadata.dimensions.aspectRatio"
              :color="project?.cover.metadata.palette.dominant.background" :alt="project?.title" />
          </div>
          <p class="project-item__title">{{ project.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => useSanity().fetch<any>(projectsQuery))
definePageMeta({
  title: 'Projects',
}) 
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: .5rem;

}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.project-item {
  list-style: none;

  &__title {
    margin-top: .5rem;
  }

  &__cover {
    border-radius: .5rem;
    overflow: hidden;

    div {
      transform: scale(1);
      transition: all .3s ease;
    }
  }

  &:hover {
    .project-item__cover>div {
      transform: scale(1.1);
      transition: all .3s ease;
    }
  }
}
</style>