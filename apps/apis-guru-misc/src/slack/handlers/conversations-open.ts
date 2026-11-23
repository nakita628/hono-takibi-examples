import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsOpenRoute } from '../routes'

export const postConversationsOpenRouteHandler: RouteHandler<
  typeof postConversationsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
