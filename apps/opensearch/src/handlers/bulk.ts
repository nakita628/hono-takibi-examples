import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkRoute, postBulkStreamRoute, putBulkRoute, putBulkStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkHandler = app
  .openapi(postBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBulkStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
