import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsReportIdRoute,
  getReportsReportIdResultCsvRoute,
  getReportsReportIdResultPrinterFriendlyRoute,
  postReportsExportXmlRoute,
  postReportsImportXmlRoute,
  postReportsReportIdDuplicateRoute,
  putReportsReportIdPreferredRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(postReportsExportXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsImportXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsReportIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReportsReportIdPreferredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIdResultCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIdResultPrinterFriendlyRoute, (c) => {
    throw new Error('Not implemented')
  })
