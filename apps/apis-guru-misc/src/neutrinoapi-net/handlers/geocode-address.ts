import type { RouteHandler } from '@hono/zod-openapi'
import type { getGeocodeAddressRoute } from '../routes'

export const getGeocodeAddressRouteHandler: RouteHandler<typeof getGeocodeAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
