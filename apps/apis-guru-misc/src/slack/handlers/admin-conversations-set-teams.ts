import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminConversationsSetTeamsRoute } from '../routes'

export const postAdminConversationsSetTeamsRouteHandler: RouteHandler<
  typeof postAdminConversationsSetTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
