import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsMetricRoute, getStatsRoute } from '../routes'

export const getStatsRouteHandler: RouteHandler<typeof getStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsMetricRouteHandler: RouteHandler<typeof getStatsMetricRoute> = async (c) => {
  throw new Error('Not implemented')
}
