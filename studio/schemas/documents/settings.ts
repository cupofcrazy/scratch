import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' }, 
    { name: 'content', title: 'Content' },
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      description: 'Default site title otherwise frontend changes',
      type: 'string',
      group: 'seo'
    }),
    defineField({
      name: 'siteImage',
      title: 'Site Image',
      description: 'Cover image for the website',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'seo'
    }),
    defineField({
      name: 'favicon',
      type: 'image',
      group: 'seo'
    }),
    defineField({
      name: 'profile',
      description: 'Profile picture',
      type: 'a11yImage',
      group: 'content'
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'link',
      group: 'footer'
    }),
  ]
})