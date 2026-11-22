import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
  getConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
  getConnectionsExternalConnectionIdOperationsCountRoute,
  getConnectionsExternalConnectionIdOperationsRoute,
  patchConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
  postConnectionsExternalConnectionIdOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsConnectionOperationHandler = app
  .openapi(getConnectionsExternalConnectionIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsExternalConnectionIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
