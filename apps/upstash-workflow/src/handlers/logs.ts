import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2WorkflowsLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(getV2WorkflowsLogsRoute, (c) => {
  throw new Error('Not implemented')
})
