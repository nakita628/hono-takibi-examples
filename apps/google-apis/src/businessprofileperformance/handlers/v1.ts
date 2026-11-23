import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1LocationFetchMultiDailyMetricsTimeSeriesRoute,
  getV1NameGetDailyMetricsTimeSeriesRoute,
  getV1ParentSearchkeywordsImpressionsMonthlyRoute,
} from '../routes'

export const getV1LocationFetchMultiDailyMetricsTimeSeriesRouteHandler: RouteHandler<
  typeof getV1LocationFetchMultiDailyMetricsTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameGetDailyMetricsTimeSeriesRouteHandler: RouteHandler<
  typeof getV1NameGetDailyMetricsTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentSearchkeywordsImpressionsMonthlyRouteHandler: RouteHandler<
  typeof getV1ParentSearchkeywordsImpressionsMonthlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
