import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOntologySharedSubjectObjectRoute,
  getOntologySubsetIdRoute,
  getOntologyTermIdGraphRoute,
  getOntologyTermIdRoute,
  getOntologyTermIdSubgraphRoute,
  getOntologyTermIdSubsetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ontologyHandler = app
  .openapi(getOntologySharedSubjectObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologySubsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologyTermIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologyTermIdGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologyTermIdSubgraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologyTermIdSubsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
