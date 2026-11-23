import type { RouteHandler } from '@hono/zod-openapi'
import type { postTimeSeriesServiceStatisticsRoute } from '../routes'

export const postTimeSeriesServiceStatisticsRouteHandler: RouteHandler<
  typeof postTimeSeriesServiceStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
