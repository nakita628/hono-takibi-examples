import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsageReportsOptionsRoute, getUsageReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageReportsBETAHandler = app
  .openapi(getUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageReportsOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
