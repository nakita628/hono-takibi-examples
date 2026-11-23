import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateShopperIdRoute } from '../routes'

export const postValidateShopperIdRouteHandler: RouteHandler<
  typeof postValidateShopperIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
