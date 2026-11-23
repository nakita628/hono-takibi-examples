import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsRestrictAccessAddGroupRoute } from '../routes'

export const postAdminConversationsRestrictAccessAddGroupRouteHandler: RouteHandler<
  typeof postAdminConversationsRestrictAccessAddGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
