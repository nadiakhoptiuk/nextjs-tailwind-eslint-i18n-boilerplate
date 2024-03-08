import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import { projectId, dataset, apiVersion } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = source => {
  return builder.image(source);
};
