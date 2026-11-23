import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportContentDataJobIdentifierRoute,
  getExportReportingDataGetDatasetsRoute,
  getExportReportingDataJobIdentifierRoute,
  getExportWorkflowsIdRoute,
  postExportCancelJobIdentifierRoute,
  postExportContentDataRoute,
  postExportReportingDataEnqueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(postExportReportingDataEnqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportReportingDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportReportingDataGetDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportContentDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportContentDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportCancelJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
