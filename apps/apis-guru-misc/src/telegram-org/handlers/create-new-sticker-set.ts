import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateNewStickerSetRoute } from '../routes'

export const postCreateNewStickerSetRouteHandler: RouteHandler<
  typeof postCreateNewStickerSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
