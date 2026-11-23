import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpriteSourceIdsJsonRoute, getSpriteSourceIdsPngRoute } from '../routes'

export const getSpriteSourceIdsJsonRouteHandler: RouteHandler<
  typeof getSpriteSourceIdsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpriteSourceIdsPngRouteHandler: RouteHandler<
  typeof getSpriteSourceIdsPngRoute
> = async (c) => {
  throw new Error('Not implemented')
}
