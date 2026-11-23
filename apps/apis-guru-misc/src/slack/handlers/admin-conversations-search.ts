import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminConversationsSearchRoute } from '../routes'

export const getAdminConversationsSearchRouteHandler: RouteHandler<
  typeof getAdminConversationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
