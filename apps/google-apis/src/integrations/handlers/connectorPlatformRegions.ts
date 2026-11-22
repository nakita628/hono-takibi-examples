import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConnectorPlatformRegionsEnumerateRoute } from '../routes'

const app = new OpenAPIHono()

export const connectorPlatformRegionsHandler = app.openapi(
  getV1ConnectorPlatformRegionsEnumerateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
