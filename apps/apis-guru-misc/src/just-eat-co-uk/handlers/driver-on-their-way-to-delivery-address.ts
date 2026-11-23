import type { RouteHandler } from '@hono/zod-openapi'
import type { putDriverOnTheirWayToDeliveryAddressRoute } from '../routes'

export const putDriverOnTheirWayToDeliveryAddressRouteHandler: RouteHandler<
  typeof putDriverOnTheirWayToDeliveryAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
