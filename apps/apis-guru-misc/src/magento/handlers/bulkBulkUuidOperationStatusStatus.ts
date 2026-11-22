import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BulkBulkUuidOperationStatusStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkBulkUuidOperationStatusStatusHandler = app.openapi(
  getV1BulkBulkUuidOperationStatusStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
