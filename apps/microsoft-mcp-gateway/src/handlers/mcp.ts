import { OpenAPIHono } from '@hono/zod-openapi'
import { postMcpRoute } from '../routes'

const app = new OpenAPIHono()

export const mcpHandler = app.openapi(postMcpRoute, (c) => {
  throw new Error('Not implemented')
})
