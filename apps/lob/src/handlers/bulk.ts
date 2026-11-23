import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkIntlVerificationsRoute, postBulkUsVerificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkHandler = app
  .openapi(postBulkUsVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkIntlVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
