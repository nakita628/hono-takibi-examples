import type { RouteHandler } from '@hono/zod-openapi'
import type { getConversationsMembersRoute } from '../routes'

export const getConversationsMembersRouteHandler: RouteHandler<
  typeof getConversationsMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
