import type { RouteHandler } from '@hono/zod-openapi'
import type { getStickerPacksRoute, getStickerPacksPackIdRoute } from '../routes'

export const getStickerPacksRouteHandler: RouteHandler<typeof getStickerPacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStickerPacksPackIdRouteHandler: RouteHandler<
  typeof getStickerPacksPackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
