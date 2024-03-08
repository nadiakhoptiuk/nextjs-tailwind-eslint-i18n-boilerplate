import { groq } from 'next-sanity';

export const testQuery = groq`
    *[_type == "test" && _id == "test"] {
      "src":image.image.asset->url,
      "alt":image.alt,
      "lqip":image.image.asset->metadata.lqip,
    }[0]
`;
