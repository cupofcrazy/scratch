import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'
import { structure } from './structure'

import './styles.css'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

const { theme } = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?default=1c1c1c;700;lightest:ffffff;darkest:111111&primary=001111&transparent=e8e8e8'
)) as { theme: import('sanity').StudioTheme }

export default defineConfig({
  name: 'bureau',
  title: 'Bureau Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    // presentationTool({
    //   previewUrl: {
    //     origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
    //     previewMode: {
    //       enable: '/preview/enable',
    //       disable: '/preview/disable',
    //     },
    //   },
    // }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme
})
