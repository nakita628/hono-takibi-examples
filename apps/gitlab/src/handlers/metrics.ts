import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4UsageDataMetricDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app.openapi(getApiV4UsageDataMetricDefinitionsRoute, (c) => {
  throw new Error('Not implemented')
})
