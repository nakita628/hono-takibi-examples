import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetOnlineFriendsRoute } from '../routes'

export const postGetOnlineFriendsRouteHandler: RouteHandler<
  typeof postGetOnlineFriendsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
