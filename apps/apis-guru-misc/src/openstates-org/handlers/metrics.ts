import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app.openapi(getMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
