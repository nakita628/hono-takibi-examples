import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalyticsGrossRevenueRoute,
  getAnalyticsInvoiceCollectionRoute,
  getAnalyticsInvoicedUsageRoute,
  getAnalyticsMrrRoute,
  getAnalyticsOverdueBalanceRoute,
  getAnalyticsUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getAnalyticsGrossRevenueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsInvoiceCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsInvoicedUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsMrrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsOverdueBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
