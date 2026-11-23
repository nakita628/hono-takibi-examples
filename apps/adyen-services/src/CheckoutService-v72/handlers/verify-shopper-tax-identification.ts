import type { RouteHandler } from '@hono/zod-openapi'
import type { postVerifyShopperTaxIdentificationRoute } from '../routes'

export const postVerifyShopperTaxIdentificationRouteHandler: RouteHandler<
  typeof postVerifyShopperTaxIdentificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
