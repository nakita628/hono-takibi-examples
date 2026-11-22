import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BulkRedirectsRoute,
  getV1BulkRedirectsRoute,
  getV1BulkRedirectsVersionsRoute,
  patchV1BulkRedirectsRoute,
  postV1BulkRedirectsRestoreRoute,
  postV1BulkRedirectsVersionsRoute,
  putV1BulkRedirectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkRedirectsHandler = app
  .openapi(putV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkRedirectsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkRedirectsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkRedirectsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
