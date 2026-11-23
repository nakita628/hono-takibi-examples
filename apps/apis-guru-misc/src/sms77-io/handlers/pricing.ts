import type { RouteHandler } from '@hono/zod-openapi'
import type { getPricingRoute } from '../routes'

export const getPricingRouteHandler: RouteHandler<typeof getPricingRoute> = async (c) => {
  throw new Error('Not implemented')
}
