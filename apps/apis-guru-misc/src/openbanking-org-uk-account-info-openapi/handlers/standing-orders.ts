import { OpenAPIHono } from '@hono/zod-openapi'
import { getStandingOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const standingOrdersHandler = app.openapi(getStandingOrdersRoute, (c) => {
  throw new Error('Not implemented')
})
