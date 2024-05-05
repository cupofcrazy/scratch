<script setup lang="ts">
type ImageProps = {
  aspectRatio: number | string
  color: string
  showPlaceholder?: boolean

}
const props = withDefaults(defineProps<ImageProps>(), {
  aspectRatio: 4 / 3,
  color: 'red',
  showPlaceholder: true,
})
const imageLoading = ref(true)
const onLoaded = () => {
  imageLoading.value = false
  console.log('loaded')
}

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="image-wrapper">
    <div :class="['overlay', { loaded: !imageLoading }]" :style="{ backgroundColor: props.color }"
      v-show="showPlaceholder"></div>
    <NuxtImg @load="onLoaded" class="image" v-bind="$attrs" format="webp" sizes="100vw sm:50vw md:400px"
      :style="{ aspectRatio: props.aspectRatio }" loading="lazy" />
  </div>
</template>

<style lang="scss" scoped>
.image-wrapper {
  overflow: hidden;
  position: relative;
}

.image {
  width: 100%;
  object-fit: cover;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 2;
  transition: all 1s ease;


  &.loaded {
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    // transition-delay: .8s;

  }
}
</style>