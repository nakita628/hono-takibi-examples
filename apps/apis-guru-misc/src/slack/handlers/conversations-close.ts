import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsCloseRoute } from '../routes'

export const postConversationsCloseRouteHandler: RouteHandler<
  typeof postConversationsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
