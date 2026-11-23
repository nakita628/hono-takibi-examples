import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteChatStickerSetRoute } from '../routes'

export const postDeleteChatStickerSetRouteHandler: RouteHandler<
  typeof postDeleteChatStickerSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
