import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ConnectorDocumentationGetRoute } from '../routes'

const app = new OpenAPIHono()

export const connectorDocumentationHandler = app.openapi(
  postV1ConnectorDocumentationGetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
