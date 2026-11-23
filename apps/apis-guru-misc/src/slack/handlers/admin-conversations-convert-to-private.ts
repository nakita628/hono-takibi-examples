import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsConvertToPrivateRoute } from '../routes'

export const postAdminConversationsConvertToPrivateRouteHandler: RouteHandler<
  typeof postAdminConversationsConvertToPrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
