import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateConnectorRegistrationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateConnectorRegistrationHandler = app.openapi(
  postUpdateConnectorRegistrationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
