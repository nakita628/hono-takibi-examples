import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsInviteRoute } from '../routes'

export const postConversationsInviteRouteHandler: RouteHandler<
  typeof postConversationsInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
