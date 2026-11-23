import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteStickerFromSetRoute } from '../routes'

export const postDeleteStickerFromSetRouteHandler: RouteHandler<
  typeof postDeleteStickerFromSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
