import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubscribeAddressRoute } from '../routes'

export const postSubscribeAddressRouteHandler: RouteHandler<
  typeof postSubscribeAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
