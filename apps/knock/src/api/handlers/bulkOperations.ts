import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BulkOperationsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkOperationsHandler = app.openapi(getV1BulkOperationsIdRoute, (c) => {
  throw new Error('Not implemented')
})
