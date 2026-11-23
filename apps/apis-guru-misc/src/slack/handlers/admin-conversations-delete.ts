import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsDeleteRoute } from '../routes'

export const postAdminConversationsDeleteRouteHandler: RouteHandler<
  typeof postAdminConversationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
