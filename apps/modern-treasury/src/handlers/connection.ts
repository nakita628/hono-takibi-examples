import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionHandler = app.openapi(getApiConnectionsRoute, (c) => {
  throw new Error('Not implemented')
})
