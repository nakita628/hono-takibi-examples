import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectionsConnectionIdRoute, postConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
