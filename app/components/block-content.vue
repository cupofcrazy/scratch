<template>
  <div class="block-content">
    <PortableText :value="props.content" :components="components" />
  </div>
</template>

<script setup lang="tsx">
import { PortableText } from '@portabletext/vue'
import Slider from '@/components/slider.vue'
import CommonImage from '@/components/common/image.vue'

const props = defineProps<{ content: any }>()
const app = useNuxtApp()

const components = {
  types: {
    a11yImage: ({ value }: any) => {
      return h(CommonImage, {
        class: 'block-content__img',
        src: app.$urlFor(value.image).url(),
        alt: value.alt,
        aspectRatio: value.image.metadata.dimensions.aspectRatio,
        // placeholder: app.$urlFor(value.image).width(30).blur(30).auto('format').url(),
        color: value.image.metadata.palette.vibrant.background
      })
    },
    slideshow: ({ value }: any) => h(Slider, { slides: value })
  },
  marks: {
    link: ({ value }: any, { slots }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;

      return h('a', {
        href: value.href,
        class: 'block-content__link',
        target,
        rel: target === '_blank' && 'noindex nofollow'

      }, slots.default?.())
    }
  }
}
</script>

<style lang="scss">
.block-content {
  // display: flex;
  // flex-direction: column;
  // gap: 1rem;

  p {
    color: var(--black);

    // width: 50%;
    // text-indent: 1rem;
  }

  &__link {
    // font-style: italic;
    color: rgba(0, 0, 0, .5);
    text-decoration: underline;
    position: relative;
    transition: all .3s ease;

    &:hover {
      color: #111111;

      transition: all .3s ease;
    }
  }

  &__img {
    margin: 0 auto;
    // width: 33.3%;
    // aspect-ratio: 1;
    border-radius: 1rem;
    object-fit: cover;

  }

  p:not(:last-child),
  ul:not(:last-child) {
    padding-bottom: 1rem;
  }

  .block-content a {
    text-decoration: underline;
  }

  .block-content ul li {
    margin-left: 15px;
  }

  ul li::before {
    content: '•';
    display: inline-block;
    width: 15px;
    margin-left: -15px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5rem;
    margin-bottom: .25rem;
  }

  // .block-highlight::before {
  //   content: '• ';
  // }
}
</style>