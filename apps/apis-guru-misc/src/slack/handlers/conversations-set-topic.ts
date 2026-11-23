import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsSetTopicRoute } from '../routes'

export const postConversationsSetTopicRouteHandler: RouteHandler<
  typeof postConversationsSetTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
