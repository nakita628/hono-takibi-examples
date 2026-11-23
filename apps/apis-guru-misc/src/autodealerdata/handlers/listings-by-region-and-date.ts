import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingsByRegionAndDateRoute } from '../routes'

export const getListingsByRegionAndDateRouteHandler: RouteHandler<
  typeof getListingsByRegionAndDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
