import { OpenAPIHono } from '@hono/zod-openapi'
import { getExportWorkflowsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app.openapi(getExportWorkflowsIdRoute, (c) => {
  throw new Error('Not implemented')
})
