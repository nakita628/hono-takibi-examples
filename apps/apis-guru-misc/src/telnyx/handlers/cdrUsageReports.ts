import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsCdrUsageReportsSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const cdrUsageReportsHandler = app.openapi(getReportsCdrUsageReportsSyncRoute, (c) => {
  throw new Error('Not implemented')
})
