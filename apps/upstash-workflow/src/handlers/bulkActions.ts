import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2WorkflowsBulkActionsActionIdRoute, getV2WorkflowsBulkActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkActionsHandler = app
  .openapi(getV2WorkflowsBulkActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsBulkActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
