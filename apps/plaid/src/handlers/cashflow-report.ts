import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postCashflowReportGetRoute,
  postCashflowReportInsightsGetRoute,
  postCashflowReportRefreshRoute,
  postCashflowReportTransactionsGetRoute,
} from '../routes'

export const postCashflowReportRefreshRouteHandler: RouteHandler<
  typeof postCashflowReportRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCashflowReportGetRouteHandler: RouteHandler<
  typeof postCashflowReportGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCashflowReportTransactionsGetRouteHandler: RouteHandler<
  typeof postCashflowReportTransactionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCashflowReportInsightsGetRouteHandler: RouteHandler<
  typeof postCashflowReportInsightsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
