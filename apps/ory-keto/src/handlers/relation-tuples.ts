import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRelationTuplesCheckOpenapiRoute,
  getRelationTuplesCheckRoute,
  getRelationTuplesExpandRoute,
  getRelationTuplesRoute,
  postRelationTuplesBatchCheckRoute,
  postRelationTuplesCheckOpenapiRoute,
  postRelationTuplesCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationTuplesHandler = app
  .openapi(getRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRelationTuplesBatchCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationTuplesCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRelationTuplesCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationTuplesCheckOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRelationTuplesCheckOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationTuplesExpandRoute, (c) => {
    throw new Error('Not implemented')
  })
