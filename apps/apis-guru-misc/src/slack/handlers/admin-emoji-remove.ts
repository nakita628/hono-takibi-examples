import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminEmojiRemoveRoute } from '../routes'

export const postAdminEmojiRemoveRouteHandler: RouteHandler<
  typeof postAdminEmojiRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
