import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRegionMarketShareRoute } from '../routes'

export const getGetRegionMarketShareRouteHandler: RouteHandler<
  typeof getGetRegionMarketShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
