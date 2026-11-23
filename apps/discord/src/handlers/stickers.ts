import type { RouteHandler } from '@hono/zod-openapi'
import type { getStickersStickerIdRoute } from '../routes'

export const getStickersStickerIdRouteHandler: RouteHandler<
  typeof getStickersStickerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
