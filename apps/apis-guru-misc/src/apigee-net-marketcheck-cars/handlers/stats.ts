import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatsCarRoute } from '../routes'

export const getStatsCarRouteHandler: RouteHandler<typeof getStatsCarRoute> = async (c) => {
  throw new Error('Not implemented')
}
