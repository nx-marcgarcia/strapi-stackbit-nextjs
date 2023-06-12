import { ContentfulContentSource } from '@stackbit/cms-contentful';
import { defineStackbitConfig } from '@stackbit/types';

const config = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  pagesDir: 'content/pages',
  dataDir: 'content/data',
  presetSource: {
    types: 'files',
    presetDirs: ['sources/local/presets'],
  },
  assets: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'images',
    publicPath: '/',
  },
  pageLayoutKey: 'type',
  styleObjectModelName: 'ThemeStyle',
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID || 'master',
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN || 'master',
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || 'master',
    }),
  ],
  modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }],
  // Needed only for importing this repository via https://app.stackbit.com/import?mode=duplicate
  import: {
    type: 'contentful',
    contentFile: 'contentful/export.json',
    uploadAssets: true,
    assetsDirectory: 'contentful',
    spaceIdEnvVar: 'CONTENTFUL_SPACE_ID',
    deliveryTokenEnvVar: 'CONTENTFUL_DELIVERY_TOKEN',
    previewTokenEnvVar: 'CONTENTFUL_PREVIEW_TOKEN',
    accessTokenEnvVar: 'CONTENTFUL_MANAGEMENT_TOKEN',
  },
};

export default config;
