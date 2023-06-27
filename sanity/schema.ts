import { type SchemaTypeDefinition } from 'sanity';
import createSchema from 'sanity';

// Then export schema types from any players that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";



import social from './schemas/social';
import experience from './schemas/experience';
import skill from './schemas/skill';
import project from  './schemas/project';
import pageInfo from './schemas/pageInfo';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, project, experience, social, pageInfo],
}


export default createSchema({
  name: "default",

  types: schemaTypes.concat([skill, pageInfo, experience, social, project]),
})