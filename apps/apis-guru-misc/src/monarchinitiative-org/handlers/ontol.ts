import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute,
  getOntolSubgraphOntologyNodeRoute,
  postOntolSubgraphOntologyNodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ontolHandler = app
  .openapi(getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntolSubgraphOntologyNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOntolSubgraphOntologyNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
