import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const customMetricsHandler = app.openapi(getCustomMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
