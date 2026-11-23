import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetricsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsJsonHandler = app.openapi(getMetricsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
