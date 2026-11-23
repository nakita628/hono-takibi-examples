import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminConversationsGetConversationPrefsRoute } from '../routes'

export const getAdminConversationsGetConversationPrefsRouteHandler: RouteHandler<
  typeof getAdminConversationsGetConversationPrefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
