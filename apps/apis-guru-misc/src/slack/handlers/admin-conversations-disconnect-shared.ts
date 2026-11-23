import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsDisconnectSharedRoute } from '../routes'

export const postAdminConversationsDisconnectSharedRouteHandler: RouteHandler<
  typeof postAdminConversationsDisconnectSharedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
