import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsUnarchiveRoute } from '../routes'

export const postAdminConversationsUnarchiveRouteHandler: RouteHandler<
  typeof postAdminConversationsUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
