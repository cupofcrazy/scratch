<template>
  <div class="project">
    <div class="project__header">
      <button @click="$router.back()">
        <IconsBackIcon width="14" height="14" aria-label="Go back" />
      </button>
      <h1 class="project__title">{{ project.title }}</h1>
    </div>

    <div class="project__cover">
      <CommonImage v-if="project?.cover" :src="$urlFor(project?.cover).url()"
        :aspect-ratio="project?.cover.metadata.dimensions.aspectRatio"
        :color="project?.cover.metadata.palette.dominant.background" :alt="project?.title" />
    </div>
    <div class="project__content">
      <BlockContent :content="project.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: project } = await useAsyncData('project', () => useSanity().fetch<any>(projectQuery, { slug: route.params.slug }))

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project does not exist.'
  })
}

</script>

<style scoped lang="scss">
.project {
  &__cover {
    border-radius: 1rem;
    overflow: hidden;
    max-width: 200px;
  }

  &__title {
    margin-bottom: .5rem;
  }

  &__content {
    margin-top: 1rem;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    gap: .25rem;

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 .5rem .25rem 0;
    }
  }
}
</style>