import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkflowsStepFailedRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowsStepFailedHandler = app.openapi(getWorkflowsStepFailedRoute, (c) => {
  throw new Error('Not implemented')
})
