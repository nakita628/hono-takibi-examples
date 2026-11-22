import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsDailyPrintUsageByPrinterCountRoute,
  getReportsDailyPrintUsageByUserCountRoute,
  getReportsMonthlyPrintUsageByPrinterCountRoute,
  getReportsMonthlyPrintUsageByUserCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsDailyPrintUsageByPrinterCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDailyPrintUsageByUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByPrinterCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
