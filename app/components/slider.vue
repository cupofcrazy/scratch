<template>
  <div class="slider keen-slider" ref="sliderRef">
    <div class="keen-slider__slide" v-for="slide in slides.images" :key="slide.image._id">
      <CommonImage v-if="slide.image" :src="$urlFor(slide.image).url()" :aspect-ratio="4 / 3"
        :color="slide.image.metadata.palette.dominant.background" :alt="slide.image.alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue'

const props = defineProps<{
  slides: any
}>()
const [sliderRef, slider] = useKeenSlider({
  slides: {
    perView: 2
  },
  loop: true
})

console.log(props.slides)

</script>

<style lang="scss" scoped>
.slider {
  border-radius: 1rem;
  margin-bottom: 1rem;
}
</style>