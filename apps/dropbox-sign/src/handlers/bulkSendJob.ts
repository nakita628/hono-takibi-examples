import { OpenAPIHono } from '@hono/zod-openapi'
import { getBulkSendJobBulkSendJobIdRoute, getBulkSendJobListRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkSendJobHandler = app
  .openapi(getBulkSendJobBulkSendJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkSendJobListRoute, (c) => {
    throw new Error('Not implemented')
  })
