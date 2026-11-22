import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectorConnectorsIdDocsDocIdRoute } from '../routes'

const app = new OpenAPIHono()

export const connectorDocsHandler = app.openapi(getConnectorConnectorsIdDocsDocIdRoute, (c) => {
  throw new Error('Not implemented')
})
