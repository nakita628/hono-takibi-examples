import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsExternalConnectionIdSchemaRoute,
  getConnectionsExternalConnectionIdSchemaRoute,
  patchConnectionsExternalConnectionIdSchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsSchemaHandler = app
  .openapi(deleteConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
