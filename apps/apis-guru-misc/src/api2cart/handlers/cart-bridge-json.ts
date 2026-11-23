import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartBridgeJsonRoute } from '../routes'

export const getCartBridgeJsonRouteHandler: RouteHandler<typeof getCartBridgeJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
