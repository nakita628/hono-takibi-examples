import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreatePadRoute, postCreatePadRoute } from '../routes'

export const getCreatePadRouteHandler: RouteHandler<typeof getCreatePadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreatePadRouteHandler: RouteHandler<typeof postCreatePadRoute> = async (c) => {
  throw new Error('Not implemented')
}
