import { OpenAPIHono } from '@hono/zod-openapi'
import { postMetricsEnvironmentsEnvironmentNameRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app.openapi(postMetricsEnvironmentsEnvironmentNameRoute, (c) => {
  throw new Error('Not implemented')
})
