import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsRoute, getReportsSavedReportIdRoute, getReportsSavedRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSavedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSavedReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
