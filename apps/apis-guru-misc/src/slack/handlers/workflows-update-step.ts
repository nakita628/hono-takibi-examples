import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkflowsUpdateStepRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowsUpdateStepHandler = app.openapi(getWorkflowsUpdateStepRoute, (c) => {
  throw new Error('Not implemented')
})
