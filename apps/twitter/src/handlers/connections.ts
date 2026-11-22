import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ConnectionsAllRoute,
  delete2ConnectionsEndpointIdRoute,
  delete2ConnectionsRoute,
  get2ConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(delete2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ConnectionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ConnectionsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
