import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkRoute, putBulkRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkHandler = app
  .openapi(putBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
