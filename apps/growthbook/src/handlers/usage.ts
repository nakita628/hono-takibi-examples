import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UsageMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app.openapi(getV1UsageMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
