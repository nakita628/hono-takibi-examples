import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsDailyPrintUsageByUserCountRoute,
  getReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsDailyPrintUsageByUserRoute,
  getReportsMonthlyPrintUsageByUserCountRoute,
  getReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsMonthlyPrintUsageByUserRoute,
  patchReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  patchReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  postReportsDailyPrintUsageByUserRoute,
  postReportsMonthlyPrintUsageByUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsPrintUsageByUserHandler = app
  .openapi(getReportsDailyPrintUsageByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsDailyPrintUsageByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDailyPrintUsageByUserPrintUsageByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsDailyPrintUsageByUserPrintUsageByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDailyPrintUsageByUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsMonthlyPrintUsageByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
