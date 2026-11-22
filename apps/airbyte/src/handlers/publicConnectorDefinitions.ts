import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicV1ConnectorDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const publicConnectorDefinitionsHandler = app.openapi(
  getPublicV1ConnectorDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
