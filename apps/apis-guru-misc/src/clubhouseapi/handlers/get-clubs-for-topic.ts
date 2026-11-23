import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetClubsForTopicRoute } from '../routes'

export const postGetClubsForTopicRouteHandler: RouteHandler<
  typeof postGetClubsForTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
