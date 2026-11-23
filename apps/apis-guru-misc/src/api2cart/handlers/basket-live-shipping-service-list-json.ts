import type { RouteHandler } from '@hono/zod-openapi'
import type { getBasketLiveShippingServiceListJsonRoute } from '../routes'

export const getBasketLiveShippingServiceListJsonRouteHandler: RouteHandler<
  typeof getBasketLiveShippingServiceListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
