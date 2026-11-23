import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeletePadRoute, postDeletePadRoute } from '../routes'

export const getDeletePadRouteHandler: RouteHandler<typeof getDeletePadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeletePadRouteHandler: RouteHandler<typeof postDeletePadRoute> = async (c) => {
  throw new Error('Not implemented')
}
