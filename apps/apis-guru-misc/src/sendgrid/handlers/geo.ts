import type { RouteHandler } from '@hono/zod-openapi'
import type { getGeoStatsRoute } from '../routes'

export const getGeoStatsRouteHandler: RouteHandler<typeof getGeoStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
