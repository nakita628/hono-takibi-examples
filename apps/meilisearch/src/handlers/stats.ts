import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsRoute } from '../routes'

export const getStatsRouteHandler: RouteHandler<typeof getStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
