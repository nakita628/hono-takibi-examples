import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ToolsSharefileRoute } from '../routes'

const app = new OpenAPIHono()

export const toolsHandler = app.openapi(postV1ToolsSharefileRoute, (c) => {
  throw new Error('Not implemented')
})
