import { defineConfig } from 'sanity';
import { documentInternationalization } from '@sanity/document-internationalization';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from '@/sanity/schemas';
import { myStructure } from '@/sanity/deskStructure';
import { projectId, dataset } from '@/sanity/env';
import { i18n } from '@/languages';

export default defineConfig({
  name: 'test',
  title: 'project test sanity',
  basePath: '/admin',
  projectId,
  dataset,

  plugins: [
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['test'],
    }),
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
