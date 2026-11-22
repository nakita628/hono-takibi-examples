import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFqdnConnectionsIdRoute,
  getFqdnConnectionsIdRoute,
  getFqdnConnectionsRoute,
  patchFqdnConnectionsIdRoute,
  postFqdnConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fqdnConnectionsHandler = app
  .openapi(getFqdnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFqdnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFqdnConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFqdnConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFqdnConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
