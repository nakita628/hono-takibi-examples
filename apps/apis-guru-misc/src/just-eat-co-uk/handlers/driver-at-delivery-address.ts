import type { RouteHandler } from '@hono/zod-openapi'
import type { putDriverAtDeliveryAddressRoute } from '../routes'

export const putDriverAtDeliveryAddressRouteHandler: RouteHandler<
  typeof putDriverAtDeliveryAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
