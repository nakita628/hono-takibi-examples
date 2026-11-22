import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsDailyPrintUsageByPrinterCountRoute,
  getReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsDailyPrintUsageByPrinterRoute,
  getReportsMonthlyPrintUsageByPrinterCountRoute,
  getReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsMonthlyPrintUsageByPrinterRoute,
  patchReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  patchReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  postReportsDailyPrintUsageByPrinterRoute,
  postReportsMonthlyPrintUsageByPrinterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsPrintUsageByPrinterHandler = app
  .openapi(getReportsDailyPrintUsageByPrinterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsDailyPrintUsageByPrinterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDailyPrintUsageByPrinterCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByPrinterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsMonthlyPrintUsageByPrinterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMonthlyPrintUsageByPrinterCountRoute, (c) => {
    throw new Error('Not implemented')
  })
