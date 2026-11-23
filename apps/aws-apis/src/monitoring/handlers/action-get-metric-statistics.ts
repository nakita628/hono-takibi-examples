import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetMetricStatisticsRoute,
  postActionGetMetricStatisticsRoute,
} from '../routes'

export const getActionGetMetricStatisticsRouteHandler: RouteHandler<
  typeof getActionGetMetricStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetMetricStatisticsRouteHandler: RouteHandler<
  typeof postActionGetMetricStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
