import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminConversationsGetTeamsRoute } from '../routes'

export const getAdminConversationsGetTeamsRouteHandler: RouteHandler<
  typeof getAdminConversationsGetTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
