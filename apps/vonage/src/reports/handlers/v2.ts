import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ReportsReportIdRoute,
  getV2ReportsRecordsRoute,
  getV2ReportsReportIdRoute,
  getV2ReportsRoute,
  postV2ReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReportsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
