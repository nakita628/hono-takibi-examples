import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmojiListRoute } from '../routes'

export const getEmojiListRouteHandler: RouteHandler<typeof getEmojiListRoute> = async (c) => {
  throw new Error('Not implemented')
}
