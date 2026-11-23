import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingsByZipCodeAndDateRoute } from '../routes'

export const getListingsByZipCodeAndDateRouteHandler: RouteHandler<
  typeof getListingsByZipCodeAndDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
