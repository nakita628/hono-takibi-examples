import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsKickRoute } from '../routes'

export const postConversationsKickRouteHandler: RouteHandler<
  typeof postConversationsKickRoute
> = async (c) => {
  throw new Error('Not implemented')
}
