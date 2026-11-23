import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRegionBrandMarketShareRoute } from '../routes'

export const getGetRegionBrandMarketShareRouteHandler: RouteHandler<
  typeof getGetRegionBrandMarketShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
