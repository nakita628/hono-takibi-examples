import type { RouteHandler } from '@hono/zod-openapi'
import type { postAddStickerToSetRoute } from '../routes'

export const postAddStickerToSetRouteHandler: RouteHandler<
  typeof postAddStickerToSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
