import { defineType, defineField } from 'sanity'


export default defineType({
  name: 'home',
  title: 'Home',
  description: 'Homepage document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      type: 'blockContent'
    }),
    defineField({
      name: 'SEO',
      type: 'seo'

    })
  ],
})