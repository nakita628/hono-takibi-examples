import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesIndexNameRoute,
  getIndexesIndexNameRoute,
  getIndexesRoute,
  patchIndexesIndexNameRoute,
  postIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexesHandler = app
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
