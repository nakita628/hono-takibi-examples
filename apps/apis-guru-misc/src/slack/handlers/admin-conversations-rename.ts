import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsRenameRoute } from '../routes'

export const postAdminConversationsRenameRouteHandler: RouteHandler<
  typeof postAdminConversationsRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
