import type { RouteHandler } from '@hono/zod-openapi'
import type { getHeroStatsRoute } from '../routes'

export const getHeroStatsRouteHandler: RouteHandler<typeof getHeroStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
