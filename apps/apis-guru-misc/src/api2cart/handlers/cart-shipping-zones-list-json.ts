import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartShippingZonesListJsonRoute } from '../routes'

export const getCartShippingZonesListJsonRouteHandler: RouteHandler<
  typeof getCartShippingZonesListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
