import { OpenAPIHono } from '@hono/zod-openapi'
import { postListFlowsRoute } from '../routes'

const app = new OpenAPIHono()

export const listFlowsHandler = app.openapi(postListFlowsRoute, (c) => {
  throw new Error('Not implemented')
})
