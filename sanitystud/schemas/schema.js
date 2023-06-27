import {createSchema} from 'sanity';

// Then export schema types from any players that might expose them
//import {schemaTypes} from "sanity";


// We import object and document schemas
import social from './social';
import experience from './experience';
import skill from './skill';
import project from  './project';
import pageInfo from './pageInfo';
export const schemaTypes = [skill, social, project, pageInfo, experience]
export default createSchema({
    name: "default",
  
    types: schemaTypes.concat([skill, pageInfo, experience, social, project]),
  })