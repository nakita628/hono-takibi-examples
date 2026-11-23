import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPricingOutboundTypeRoute } from '../routes'

export const getGetPricingOutboundTypeRouteHandler: RouteHandler<
  typeof getGetPricingOutboundTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
