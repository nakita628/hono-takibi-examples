import type { RouteHandler } from '@hono/zod-openapi'
import type { postApiPricingHubPricesRoute } from '../routes'

export const postApiPricingHubPricesRouteHandler: RouteHandler<
  typeof postApiPricingHubPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
