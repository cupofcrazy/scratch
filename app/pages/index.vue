<template>
  <div id="index">
    <h1>{{ home.title }}</h1>
    <div class="content">
      <BlockContent :content="home.content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: home } = await useAsyncData('home', () => useSanity().fetch<any>(homeQuery))

definePageMeta({
  // title: home?.title,
  description: 'Home page'
})
</script>