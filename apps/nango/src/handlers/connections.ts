import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsRoute,
  patchConnectionsConnectionIdRoute,
  patchConnectionsMetadataRoute,
  postConnectionsConnectionIdToolsNameCallsRoute,
  postConnectionsMetadataRoute,
  postConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdToolsNameCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
