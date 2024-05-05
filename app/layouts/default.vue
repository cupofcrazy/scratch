<template>
  <main id="main">
    <CommonHeader />
    <NuxtPage class="page" />
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
#main {
  width: 100%;
  height: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

h1 {
  font-size: 1.5rem;
}

p {
  color: #4e4e4e;
}

.page {
  margin: 2rem 0;
}
</style>