import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnsubscribeAddressRoute } from '../routes'

export const postUnsubscribeAddressRouteHandler: RouteHandler<
  typeof postUnsubscribeAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
