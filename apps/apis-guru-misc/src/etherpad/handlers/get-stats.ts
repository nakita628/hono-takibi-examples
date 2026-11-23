import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetStatsRoute, postGetStatsRoute } from '../routes'

export const getGetStatsRouteHandler: RouteHandler<typeof getGetStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetStatsRouteHandler: RouteHandler<typeof postGetStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
