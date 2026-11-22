import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectionsExternalConnectionIdSchemaRoute,
  patchConnectionsExternalConnectionIdSchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsSchemaHandler = app
  .openapi(getConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
