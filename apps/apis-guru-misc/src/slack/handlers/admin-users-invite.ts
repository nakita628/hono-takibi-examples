import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsersInviteRoute } from '../routes'

export const postAdminUsersInviteRouteHandler: RouteHandler<
  typeof postAdminUsersInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
