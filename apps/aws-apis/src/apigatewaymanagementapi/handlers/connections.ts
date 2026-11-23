import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdRoute,
  getConnectionsConnectionIdRoute,
  postConnectionsConnectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(deleteConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
