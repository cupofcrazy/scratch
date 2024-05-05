import { defineType,  defineField } from 'sanity' 

export default defineType({
  name: 'imageGrid',
  title: 'Image Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'a11yImage' }],
      validation: Rule => Rule.min(2).max(3).error('Please select at least two images.'),
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
      media: 'images.0.image',
    },
    prepare({ title, images, media }) {
      const imagesLength = Object.values(images).length
      return {
        title,
        subtitle: imagesLength > 1 ? `Contains ${imagesLength} images` : `Contains ${imagesLength} image`,
        media,
      }
    }
  },
})