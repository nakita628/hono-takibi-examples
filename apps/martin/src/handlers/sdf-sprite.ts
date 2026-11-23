import type { RouteHandler } from '@hono/zod-openapi'
import type { getSdfSpriteSourceIdsJsonRoute, getSdfSpriteSourceIdsPngRoute } from '../routes'

export const getSdfSpriteSourceIdsJsonRouteHandler: RouteHandler<
  typeof getSdfSpriteSourceIdsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSdfSpriteSourceIdsPngRouteHandler: RouteHandler<
  typeof getSdfSpriteSourceIdsPngRoute
> = async (c) => {
  throw new Error('Not implemented')
}
