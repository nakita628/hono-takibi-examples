import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SemanticViewIndexRoute,
  deleteApiV1SemanticViewPkRoute,
  getApiV1SemanticViewPkStructureRoute,
  postApiV1SemanticViewIndexRoute,
  putApiV1SemanticViewPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const semanticViewRestApiHandler = app
  .openapi(deleteApiV1SemanticViewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticViewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SemanticViewPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SemanticViewPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticViewPkStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
