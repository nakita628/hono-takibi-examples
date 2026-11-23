import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingsByZipCodeRoute } from '../routes'

export const getListingsByZipCodeRouteHandler: RouteHandler<
  typeof getListingsByZipCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
