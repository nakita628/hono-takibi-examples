import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnalyticsGrossRevenueRoute,
  getAnalyticsInvoiceCollectionRoute,
  getAnalyticsInvoicedUsageRoute,
  getAnalyticsMrrRoute,
  getAnalyticsOverdueBalanceRoute,
  getAnalyticsUsageRoute,
} from '../routes'

export const getAnalyticsGrossRevenueRouteHandler: RouteHandler<
  typeof getAnalyticsGrossRevenueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsInvoiceCollectionRouteHandler: RouteHandler<
  typeof getAnalyticsInvoiceCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsInvoicedUsageRouteHandler: RouteHandler<
  typeof getAnalyticsInvoicedUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsMrrRouteHandler: RouteHandler<typeof getAnalyticsMrrRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsOverdueBalanceRouteHandler: RouteHandler<
  typeof getAnalyticsOverdueBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsUsageRouteHandler: RouteHandler<typeof getAnalyticsUsageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
