<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li>
          <NuxtLink href="/">home</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/projects">projects</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/info">info</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 9999;
  background-color: var(--white);
  width: 100%;

}

nav {}

ul {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #1111118e;

  &.router-link-exact-active {
    color: #111111;
  }
}
</style>