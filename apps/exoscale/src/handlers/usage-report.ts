import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsageReportRoute } from '../routes'

const app = new OpenAPIHono()

export const usageReportHandler = app.openapi(getUsageReportRoute, (c) => {
  throw new Error('Not implemented')
})
