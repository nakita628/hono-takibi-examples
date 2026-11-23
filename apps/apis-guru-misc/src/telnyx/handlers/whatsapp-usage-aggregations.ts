import type { RouteHandler } from '@hono/zod-openapi'
import type { getWhatsappUsageAggregationsRoute } from '../routes'

export const getWhatsappUsageAggregationsRouteHandler: RouteHandler<
  typeof getWhatsappUsageAggregationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
