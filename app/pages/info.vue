<template>
  <div id="about" class="about">
    <h1>{{ about.title }}</h1>
    <div class="content">
      <BlockContent :content="about.bio" />
    </div>
  </div>
</template>

<script setup lang="ts">

const { data: about } = await useAsyncData('about', () => useSanity().fetch<any>(aboutQuery))
</script>

<style lang="scss" scoped>
.about {}

.content {
  margin: .5rem 0;
}
</style>