import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateConnectorProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const updateConnectorProfileHandler = app.openapi(postUpdateConnectorProfileRoute, (c) => {
  throw new Error('Not implemented')
})
