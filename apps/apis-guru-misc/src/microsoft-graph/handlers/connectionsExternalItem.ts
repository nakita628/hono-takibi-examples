import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  getConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  getConnectionsExternalConnectionIdItemsRoute,
  patchConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  postConnectionsExternalConnectionIdItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsExternalItemHandler = app
  .openapi(getConnectionsExternalConnectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsExternalConnectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
