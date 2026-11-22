import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBulkRequestsIdRoute,
  getApiBulkRequestsRoute,
  postApiBulkRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkRequestHandler = app
  .openapi(getApiBulkRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBulkRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
