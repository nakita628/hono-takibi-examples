import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetStickerSetRoute } from '../routes'

export const postGetStickerSetRouteHandler: RouteHandler<typeof postGetStickerSetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
