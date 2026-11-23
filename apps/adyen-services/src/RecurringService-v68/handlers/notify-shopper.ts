import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotifyShopperRoute } from '../routes'

export const postNotifyShopperRouteHandler: RouteHandler<typeof postNotifyShopperRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
