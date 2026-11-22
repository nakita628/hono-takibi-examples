import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BulkBulkUuidDetailedStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkBulkUuidDetailedStatusHandler = app.openapi(
  getV1BulkBulkUuidDetailedStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
