import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsBatchMdrReportsIdRoute,
  getReportsBatchMdrReportsIdRoute,
  getReportsBatchMdrReportsRoute,
  getReportsMdrsRoute,
  postReportsBatchMdrReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mdrDetailReportsHandler = app
  .openapi(getReportsBatchMdrReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsBatchMdrReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsBatchMdrReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBatchMdrReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrsRoute, (c) => {
    throw new Error('Not implemented')
  })
