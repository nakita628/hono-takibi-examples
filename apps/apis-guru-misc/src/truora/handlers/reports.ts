import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ReportsReportIdRoute,
  getV1ReportsRoute,
  postV1ReportsReportIdUploadRoute,
  postV1ReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsReportIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
