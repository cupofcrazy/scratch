import { defineType, defineField } from 'sanity'


export default defineType({
  name: 'project',
  title: 'Project',
  description: 'Projects document',
  type: 'document',
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'SEO', name: 'SEO', },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
      }
    }),
    defineField({
      name: 'cover',
      type: 'a11yImage',
      group: 'content',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'SEO',
      type: 'seo',
      group: 'SEO'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'cover.image.asset',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `/projects/${subtitle.current}`,
        media: media
      };
    },
  },
})