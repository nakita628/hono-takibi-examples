import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmojiRoute } from '../routes'

export const getEmojiRouteHandler: RouteHandler<typeof getEmojiRoute> = async (c) => {
  throw new Error('Not implemented')
}
