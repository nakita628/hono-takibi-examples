import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmergencyCallingAddressRoute } from '../routes'

export const postEmergencyCallingAddressRouteHandler: RouteHandler<
  typeof postEmergencyCallingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
