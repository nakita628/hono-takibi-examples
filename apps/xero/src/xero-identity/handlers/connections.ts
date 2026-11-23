import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteConnectionsIdRoute, getConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
