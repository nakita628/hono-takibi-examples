import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsSetConversationPrefsRoute } from '../routes'

export const postAdminConversationsSetConversationPrefsRouteHandler: RouteHandler<
  typeof postAdminConversationsSetConversationPrefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
