import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetFullPricingOutboundTypeRoute } from '../routes'

export const getGetFullPricingOutboundTypeRouteHandler: RouteHandler<
  typeof getGetFullPricingOutboundTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
