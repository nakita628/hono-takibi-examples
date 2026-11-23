import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetricsWpPregameRoute, getMetricsWpRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsWpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWpPregameRoute, (c) => {
    throw new Error('Not implemented')
  })
