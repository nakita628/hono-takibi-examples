import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsReportIdDownloadUrlRoute,
  getReportsReportIdRoute,
  getReportsRoute,
  postReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIdDownloadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
