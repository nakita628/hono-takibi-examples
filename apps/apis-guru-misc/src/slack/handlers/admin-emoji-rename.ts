import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminEmojiRenameRoute } from '../routes'

export const postAdminEmojiRenameRouteHandler: RouteHandler<
  typeof postAdminEmojiRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
