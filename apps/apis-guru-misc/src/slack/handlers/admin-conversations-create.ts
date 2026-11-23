import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsCreateRoute } from '../routes'

export const postAdminConversationsCreateRouteHandler: RouteHandler<
  typeof postAdminConversationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
