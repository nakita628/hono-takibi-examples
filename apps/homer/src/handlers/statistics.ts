import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatisticsDatabasesRoute,
  getStatisticsMeasurementsRoute,
  getStatisticsMetricsRoute,
  getStatisticsTagsRoute,
  postStatisticsQueryRoute,
} from '../routes'

export const postStatisticsQueryRouteHandler: RouteHandler<
  typeof postStatisticsQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsDatabasesRouteHandler: RouteHandler<
  typeof getStatisticsDatabasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsMeasurementsRouteHandler: RouteHandler<
  typeof getStatisticsMeasurementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsMetricsRouteHandler: RouteHandler<
  typeof getStatisticsMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsTagsRouteHandler: RouteHandler<typeof getStatisticsTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
