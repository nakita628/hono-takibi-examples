import type { RouteHandler } from '@hono/zod-openapi'
import type { getMovePadRoute, postMovePadRoute } from '../routes'

export const getMovePadRouteHandler: RouteHandler<typeof getMovePadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMovePadRouteHandler: RouteHandler<typeof postMovePadRoute> = async (c) => {
  throw new Error('Not implemented')
}
