import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWorkflowStepExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListWorkflowStepExecutionsHandler = app.openapi(
  postListWorkflowStepExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
