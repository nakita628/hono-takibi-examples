import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSuggestedFollowsFriendsOnlyRoute } from '../routes'

export const postGetSuggestedFollowsFriendsOnlyRouteHandler: RouteHandler<
  typeof postGetSuggestedFollowsFriendsOnlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
