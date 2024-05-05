<template>
  <div class="error-page">
    <div v-if="is404Page">
      An error {{ error.statusCode }} occurred...
      <p>{{ error.message }} <span>
          <NuxtLink to="/">Head home</NuxtLink>
        </span></p>
    </div>
    <div v-else>
      An error {{ error.statusCode }} occurred...
      <p>{{ error.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();
const is404Page = computed(() => props.error.statusCode === 404);

</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  height: 100vh;
}
</style>