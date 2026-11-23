import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsJoinRoute } from '../routes'

export const postConversationsJoinRouteHandler: RouteHandler<
  typeof postConversationsJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}
