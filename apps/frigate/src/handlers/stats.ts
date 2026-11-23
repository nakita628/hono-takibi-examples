import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsHistoryRoute, getStatsRoute } from '../routes'

export const getStatsRouteHandler: RouteHandler<typeof getStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsHistoryRouteHandler: RouteHandler<typeof getStatsHistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}
