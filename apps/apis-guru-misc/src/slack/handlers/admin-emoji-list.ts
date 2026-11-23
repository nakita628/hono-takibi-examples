import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminEmojiListRoute } from '../routes'

export const getAdminEmojiListRouteHandler: RouteHandler<typeof getAdminEmojiListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
