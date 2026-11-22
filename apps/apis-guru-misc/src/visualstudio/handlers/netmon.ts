import { OpenAPIHono } from '@hono/zod-openapi'
import { getInternalNetmonCorrelationRoute } from '../routes'

const app = new OpenAPIHono()

export const netmonHandler = app.openapi(getInternalNetmonCorrelationRoute, (c) => {
  throw new Error('Not implemented')
})
