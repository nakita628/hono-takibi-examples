import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPublicV2MetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app.openapi(getApiPublicV2MetricsRoute, (c) => {
  throw new Error('Not implemented')
})
