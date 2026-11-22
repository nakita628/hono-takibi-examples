import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute,
  getApiRnsPvtReportsRoute,
  postApiRnsPvtReportsReportNameDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getApiRnsPvtReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPvtReportsReportNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
