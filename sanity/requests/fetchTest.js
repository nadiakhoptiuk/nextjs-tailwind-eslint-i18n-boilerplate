import { client } from '../client';
import { testQuery } from './queries/test';

export const fetchTest = async () => {
  const test = await client.fetch(testQuery);
  return test;
};
