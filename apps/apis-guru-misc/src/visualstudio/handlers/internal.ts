import { OpenAPIHono } from '@hono/zod-openapi'
import { getInternalNetmonCorrelationRoute } from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app.openapi(getInternalNetmonCorrelationRoute, (c) => {
  throw new Error('Not implemented')
})
