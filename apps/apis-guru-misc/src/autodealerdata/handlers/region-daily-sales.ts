import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegionDailySalesRoute } from '../routes'

export const getRegionDailySalesRouteHandler: RouteHandler<
  typeof getRegionDailySalesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
