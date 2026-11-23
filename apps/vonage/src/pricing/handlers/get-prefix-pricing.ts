import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPrefixPricingOutboundTypeRoute } from '../routes'

export const getGetPrefixPricingOutboundTypeRouteHandler: RouteHandler<
  typeof getGetPrefixPricingOutboundTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
