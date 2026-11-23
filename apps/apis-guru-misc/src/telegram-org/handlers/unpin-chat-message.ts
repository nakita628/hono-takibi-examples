import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnpinChatMessageRoute } from '../routes'

export const postUnpinChatMessageRouteHandler: RouteHandler<
  typeof postUnpinChatMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
