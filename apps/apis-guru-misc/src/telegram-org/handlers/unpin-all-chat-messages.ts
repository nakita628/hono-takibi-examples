import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnpinAllChatMessagesRoute } from '../routes'

export const postUnpinAllChatMessagesRouteHandler: RouteHandler<
  typeof postUnpinAllChatMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
