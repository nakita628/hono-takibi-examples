import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminEmojiAddAliasRoute } from '../routes'

export const postAdminEmojiAddAliasRouteHandler: RouteHandler<
  typeof postAdminEmojiAddAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}
