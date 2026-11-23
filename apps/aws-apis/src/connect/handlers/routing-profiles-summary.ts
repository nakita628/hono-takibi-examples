import type { RouteHandler } from '@hono/zod-openapi'
import type { getRoutingProfilesSummaryInstanceIdRoute } from '../routes'

export const getRoutingProfilesSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getRoutingProfilesSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
