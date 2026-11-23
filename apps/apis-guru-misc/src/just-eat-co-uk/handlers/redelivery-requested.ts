import { OpenAPIHono } from '@hono/zod-openapi'
import { putRedeliveryRequestedRoute } from '../routes'

const app = new OpenAPIHono()

export const redeliveryRequestedHandler = app.openapi(putRedeliveryRequestedRoute, (c) => {
  throw new Error('Not implemented')
})
