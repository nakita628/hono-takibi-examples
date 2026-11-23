import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetChatRoute } from '../routes'

export const postGetChatRouteHandler: RouteHandler<typeof postGetChatRoute> = async (c) => {
  throw new Error('Not implemented')
}
