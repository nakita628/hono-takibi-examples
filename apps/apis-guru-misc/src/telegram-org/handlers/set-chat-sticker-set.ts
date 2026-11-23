import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetChatStickerSetRoute } from '../routes'

export const postSetChatStickerSetRouteHandler: RouteHandler<
  typeof postSetChatStickerSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
