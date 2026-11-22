import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetricsEndpointsRoute, getMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
