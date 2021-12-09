import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

import { Schema } from './schema';

const generateTagString = (schema: Schema) => {
  return ['type', 'platform', 'scope']
    .filter((value) => schema[value])
    .map((value) => `${value}:${schema[value]}`)
    .join(',');
};

export default async (tree: Tree, schema: Schema) => {
  await libraryGenerator(tree, {
    name: schema.name,
    tags: generateTagString(schema),
  });
  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
};
