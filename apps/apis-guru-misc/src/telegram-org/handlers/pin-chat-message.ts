import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinChatMessageRoute } from '../routes'

export const postPinChatMessageRouteHandler: RouteHandler<typeof postPinChatMessageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
