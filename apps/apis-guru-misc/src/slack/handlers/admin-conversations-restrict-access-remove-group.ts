import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsRestrictAccessRemoveGroupRoute } from '../routes'

export const postAdminConversationsRestrictAccessRemoveGroupRouteHandler: RouteHandler<
  typeof postAdminConversationsRestrictAccessRemoveGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
