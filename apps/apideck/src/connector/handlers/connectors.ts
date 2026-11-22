import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectorConnectorsIdRoute, getConnectorConnectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectorsHandler = app
  .openapi(getConnectorConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
