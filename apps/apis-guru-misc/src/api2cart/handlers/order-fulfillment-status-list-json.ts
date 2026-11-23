import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderFulfillmentStatusListJsonRoute } from '../routes'

export const getOrderFulfillmentStatusListJsonRouteHandler: RouteHandler<
  typeof getOrderFulfillmentStatusListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
