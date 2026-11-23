import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartDisconnectJsonRoute } from '../routes'

export const getCartDisconnectJsonRouteHandler: RouteHandler<
  typeof getCartDisconnectJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
