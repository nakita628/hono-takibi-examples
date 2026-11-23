import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoutingNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const routingNumbersHandler = app.openapi(getRoutingNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
