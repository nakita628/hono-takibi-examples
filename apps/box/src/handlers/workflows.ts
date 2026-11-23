import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkflowsRoute, postWorkflowsWorkflowIdStartRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsWorkflowIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
