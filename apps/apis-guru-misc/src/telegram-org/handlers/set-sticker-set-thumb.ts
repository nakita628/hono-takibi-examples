import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetStickerSetThumbRoute } from '../routes'

export const postSetStickerSetThumbRouteHandler: RouteHandler<
  typeof postSetStickerSetThumbRoute
> = async (c) => {
  throw new Error('Not implemented')
}
