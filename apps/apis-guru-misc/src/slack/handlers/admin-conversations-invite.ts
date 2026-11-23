import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsInviteRoute } from '../routes'

export const postAdminConversationsInviteRouteHandler: RouteHandler<
  typeof postAdminConversationsInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
