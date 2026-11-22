import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BulkBulkUuidStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkBulkUuidStatusHandler = app.openapi(getV1BulkBulkUuidStatusRoute, (c) => {
  throw new Error('Not implemented')
})
