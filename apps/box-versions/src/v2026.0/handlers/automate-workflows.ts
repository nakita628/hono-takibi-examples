import { OpenAPIHono } from '@hono/zod-openapi'
import { getAutomateWorkflowsRoute, postAutomateWorkflowsWorkflowIdStartRoute } from '../routes'

const app = new OpenAPIHono()

export const automateWorkflowsHandler = app
  .openapi(getAutomateWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomateWorkflowsWorkflowIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
