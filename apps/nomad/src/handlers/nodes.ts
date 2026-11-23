import { OpenAPIHono } from '@hono/zod-openapi'
import { getNodesRoute } from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app.openapi(getNodesRoute, (c) => {
  throw new Error('Not implemented')
})
