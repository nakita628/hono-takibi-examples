import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectionsCountRoute, getConnectionsIdRoute, getConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
