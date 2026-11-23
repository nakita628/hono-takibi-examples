import type { RouteHandler } from '@hono/zod-openapi'
import type { getCheckSubscriptionIdRoute } from '../routes'

export const getCheckSubscriptionIdRouteHandler: RouteHandler<
  typeof getCheckSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
