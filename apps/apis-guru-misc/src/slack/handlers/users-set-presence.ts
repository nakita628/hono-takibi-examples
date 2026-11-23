import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersSetPresenceRoute } from '../routes'

export const postUsersSetPresenceRouteHandler: RouteHandler<
  typeof postUsersSetPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
