import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetDealersByRegionRoute } from '../routes'

export const getGetDealersByRegionRouteHandler: RouteHandler<
  typeof getGetDealersByRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
