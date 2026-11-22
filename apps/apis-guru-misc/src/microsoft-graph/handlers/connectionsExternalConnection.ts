import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsExternalConnectionIdRoute,
  getConnectionsExternalConnectionIdRoute,
  getConnectionsRoute,
  patchConnectionsExternalConnectionIdRoute,
  postConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsExternalConnectionHandler = app
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsExternalConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
