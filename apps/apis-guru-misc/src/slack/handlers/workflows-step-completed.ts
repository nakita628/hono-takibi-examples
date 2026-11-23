import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkflowsStepCompletedRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowsStepCompletedHandler = app.openapi(getWorkflowsStepCompletedRoute, (c) => {
  throw new Error('Not implemented')
})
