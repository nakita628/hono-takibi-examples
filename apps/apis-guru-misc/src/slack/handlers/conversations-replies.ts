import type { RouteHandler } from '@hono/zod-openapi'
import type { getConversationsRepliesRoute } from '../routes'

export const getConversationsRepliesRouteHandler: RouteHandler<
  typeof getConversationsRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
