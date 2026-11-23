import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminEmojiAddRoute } from '../routes'

export const postAdminEmojiAddRouteHandler: RouteHandler<typeof postAdminEmojiAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
