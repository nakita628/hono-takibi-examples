import type { RouteHandler } from '@hono/zod-openapi'
import type { postShopV3MissionRoute } from '../routes'

export const postShopV3MissionRouteHandler: RouteHandler<typeof postShopV3MissionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
