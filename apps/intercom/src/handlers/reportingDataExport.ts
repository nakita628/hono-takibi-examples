import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDownloadReportingDataJobIdentifierRoute,
  getExportReportingDataGetDatasetsRoute,
  getExportReportingDataJobIdentifierRoute,
  postExportReportingDataEnqueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportingDataExportHandler = app
  .openapi(postExportReportingDataEnqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportReportingDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportReportingDataGetDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDownloadReportingDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
