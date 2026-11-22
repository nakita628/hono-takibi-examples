import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2BulkActionsActionIdRoute, getV2BulkActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkActionsHandler = app
  .openapi(getV2BulkActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BulkActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
