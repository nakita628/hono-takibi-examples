import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsMdrUsageReportsIdRoute,
  getReportsMdrUsageReportsIdRoute,
  getReportsMdrUsageReportsRoute,
  getReportsMdrUsageReportsSyncRoute,
  postReportsMdrUsageReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mdrUsageReportsHandler = app
  .openapi(getReportsMdrUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsMdrUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsMdrUsageReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
