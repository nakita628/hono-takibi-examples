import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ReportsReportIdRoute, postV2ReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsAPIHandler = app
  .openapi(postV2ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
