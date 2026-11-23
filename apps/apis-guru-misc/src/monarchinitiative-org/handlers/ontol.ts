import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOntolIdentifierIndexRoute,
  getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute,
  getOntolLabelerIndexRoute,
  getOntolSubgraphOntologyNodeRoute,
  postOntolIdentifierIndexRoute,
  postOntolSubgraphOntologyNodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ontolHandler = app
  .openapi(getOntolIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOntolIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntolLabelerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntolSubgraphOntologyNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOntolSubgraphOntologyNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
