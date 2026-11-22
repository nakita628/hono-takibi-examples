import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4McpRoute, postApiV4McpRoute } from '../routes'

const app = new OpenAPIHono()

export const mcpHandler = app
  .openapi(postApiV4McpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4McpRoute, (c) => {
    throw new Error('Not implemented')
  })
