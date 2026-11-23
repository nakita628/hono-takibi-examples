import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdRoute,
  getConnectionsConnectionIdEventsRoute,
  getConnectionsConnectionIdPortsIdEventsRoute,
  getConnectionsConnectionIdPortsIdRoute,
  getConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
  getConnectionsConnectionIdPortsRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsConnectionIdVirtualCircuitsRoute,
  postConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
  putConnectionsConnectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(deleteConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdVirtualCircuitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute, (c) => {
    throw new Error('Not implemented')
  })
