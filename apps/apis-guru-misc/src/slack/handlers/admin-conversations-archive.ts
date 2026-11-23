import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsArchiveRoute } from '../routes'

export const postAdminConversationsArchiveRouteHandler: RouteHandler<
  typeof postAdminConversationsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
