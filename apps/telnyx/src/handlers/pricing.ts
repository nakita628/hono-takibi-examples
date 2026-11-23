import type { RouteHandler } from '@hono/zod-openapi'
import type { getPricingProductsRoute, getPricingProductsSlugRoute } from '../routes'

export const getPricingProductsRouteHandler: RouteHandler<typeof getPricingProductsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPricingProductsSlugRouteHandler: RouteHandler<
  typeof getPricingProductsSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}
