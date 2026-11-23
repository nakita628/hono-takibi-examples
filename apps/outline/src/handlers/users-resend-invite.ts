import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersResendInviteRoute } from '../routes'

export const postUsersResendInviteRouteHandler: RouteHandler<
  typeof postUsersResendInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
