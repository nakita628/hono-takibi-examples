import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingsByRegionRoute } from '../routes'

export const getListingsByRegionRouteHandler: RouteHandler<
  typeof getListingsByRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
