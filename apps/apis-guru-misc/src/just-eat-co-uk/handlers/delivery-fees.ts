import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeliveryFeesTenantRoute } from '../routes'

export const getDeliveryFeesTenantRouteHandler: RouteHandler<
  typeof getDeliveryFeesTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}
