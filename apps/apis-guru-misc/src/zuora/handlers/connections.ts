import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app.openapi(postV1ConnectionsRoute, (c) => {
  throw new Error('Not implemented')
})
