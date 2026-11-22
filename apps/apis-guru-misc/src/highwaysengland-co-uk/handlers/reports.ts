import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVVersionReportsReportTypeRoute,
  getVVersionReportsStartDateToEndDateReportTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getVVersionReportsReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionReportsStartDateToEndDateReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
