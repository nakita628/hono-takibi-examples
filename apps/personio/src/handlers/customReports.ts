import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompanyCustomReportsColumnsRoute,
  getCompanyCustomReportsReportsReportIdRoute,
  getCompanyCustomReportsReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customReportsHandler = app
  .openapi(getCompanyCustomReportsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyCustomReportsReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyCustomReportsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
