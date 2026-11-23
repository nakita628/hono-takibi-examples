import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetStickerPositionInSetRoute } from '../routes'

export const postSetStickerPositionInSetRouteHandler: RouteHandler<
  typeof postSetStickerPositionInSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
