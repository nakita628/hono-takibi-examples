import type { RouteHandler } from '@hono/zod-openapi'
import type { getLocationservicesAddressRoute } from '../routes'

export const getLocationservicesAddressRouteHandler: RouteHandler<
  typeof getLocationservicesAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
