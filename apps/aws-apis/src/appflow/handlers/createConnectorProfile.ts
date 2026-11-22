import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateConnectorProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const createConnectorProfileHandler = app.openapi(postCreateConnectorProfileRoute, (c) => {
  throw new Error('Not implemented')
})
