import { defineType, defineField } from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'


export default defineType({
  name: 'about',
  title: 'About',
  description: 'About document',
  type: 'document',
  icon: InfoOutlineIcon,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'SEO', name: 'SEO', },
    { title: 'Misc', name: 'misc' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'a11yImage',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'SEO',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'string'}],
      group: 'misc',
    }),
    defineField({
      name: 'experiments',
      title: 'Experiments',
      type: 'array',
      of: [{type: 'link'}],
      group: 'misc',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      group: 'misc',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{type: 'link'}],
      group: 'misc',
    }),
  ]
})