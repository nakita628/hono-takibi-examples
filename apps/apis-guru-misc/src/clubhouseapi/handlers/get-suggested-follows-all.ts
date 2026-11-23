import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetSuggestedFollowsAllRoute } from '../routes'

export const getGetSuggestedFollowsAllRouteHandler: RouteHandler<
  typeof getGetSuggestedFollowsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}
