import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersInviteRoute } from '../routes'

export const postUsersInviteRouteHandler: RouteHandler<typeof postUsersInviteRoute> = async (c) => {
  throw new Error('Not implemented')
}
