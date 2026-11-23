import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsReportIdRoute,
  getReportsReportIdRoute,
  getReportsRoute,
  patchReportsReportIdRoute,
  postReportsGenerateRoute,
  postReportsReportIdGenerateRoute,
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
  .openapi(postReportsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsReportIdGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
