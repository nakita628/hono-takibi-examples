import type { RouteHandler } from '@hono/zod-openapi'
import type { postLeaveChatRoute } from '../routes'

export const postLeaveChatRouteHandler: RouteHandler<typeof postLeaveChatRoute> = async (c) => {
  throw new Error('Not implemented')
}
