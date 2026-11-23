import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSuggestedFollowsSimilarRoute } from '../routes'

export const postGetSuggestedFollowsSimilarRouteHandler: RouteHandler<
  typeof postGetSuggestedFollowsSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}
