<template>
  <a v-if="type == 'external'" :href="href" target="_blank" class="link">
    <slot></slot>
  </a>
  <NuxtLink v-else class="link" :href="href">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
type LinkProps = {
  type: 'relative' | 'external',
  href: string

}
const props = defineProps<LinkProps>()
</script>

<style lang="scss" scoped>
.link {
  color: rgba(0, 0, 0, .5);
  text-decoration: none;
  transition: color .3s;
  display: block;

  &:hover {
    color: var(--black);
    text-decoration: underline;
  }
}
</style>