import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectorConnectorsIdResourcesResourceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const connectorResourcesHandler = app.openapi(
  getConnectorConnectorsIdResourcesResourceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
