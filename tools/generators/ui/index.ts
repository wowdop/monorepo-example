import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { stringUtils } from '@nrwl/workspace';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';
import { Schema } from './schema';

export const getFileName = (
  schema: Schema,
  lower = false,
  component = false
): string => {
  let name = schema.name.replace(' ', '-');

  if (lower) {
    name = name.toLowerCase();
  }

  if (component) {
    name = name
      .split('-')
      .map((v, k) => (k ? v[0].toUpperCase() + v.slice(1) : v))
      .join('');
  }

  return name;
};

export default async (tree: Tree, schema: any) => {
  // await libraryGenerator(tree, { name: schema.name });
  // await formatFiles(tree);

  // return () => {
  //   installPackagesTask(tree);
  // };
  console.log('@Generating UI component');
  console.log(schema);

  const filePath = join(__dirname, 'template');
  const destination = join(
    readProjectConfiguration(tree, schema.name).root,
    'src/lib',
    schema.name
  );

  generateFiles(tree, filePath, destination, {
    projectName: schema.name,
    author: getFileName(schema, false, false),
    template: '',
    component: getFileName(schema, true, true),
    dasherize: (str: string) => str.replace(' ', '-'),
  });
  // generateFiles(tree, filePath, destination, {
  //   projectName: schema.name,
  //   author: getFileName(schema),
  //   template: '',
  //   dasherize: (str: string) => str.replace(' ', '-'),
  // });
};
