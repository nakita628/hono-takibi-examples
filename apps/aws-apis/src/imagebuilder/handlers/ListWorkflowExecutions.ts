import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListWorkflowExecutionsHandler = app.openapi(postListWorkflowExecutionsRoute, (c) => {
  throw new Error('Not implemented')
})
