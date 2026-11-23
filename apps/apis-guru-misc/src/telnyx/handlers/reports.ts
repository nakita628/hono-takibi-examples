import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsBatchMdrReportsIdRoute,
  deleteReportsMdrUsageReportsIdRoute,
  getReportsBatchMdrReportsIdRoute,
  getReportsBatchMdrReportsRoute,
  getReportsCdrUsageReportsSyncRoute,
  getReportsMdrsRoute,
  getReportsMdrUsageReportsIdRoute,
  getReportsMdrUsageReportsRoute,
  getReportsMdrUsageReportsSyncRoute,
  getReportsWdrsRoute,
  postReportsBatchMdrReportsRoute,
  postReportsMdrUsageReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
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
  .openapi(getReportsCdrUsageReportsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsMdrUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsMdrUsageReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsWdrsRoute, (c) => {
    throw new Error('Not implemented')
  })
